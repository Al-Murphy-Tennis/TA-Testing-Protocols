/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  ChevronRight, 
  Info, 
  Dumbbell, 
  Zap, 
  Timer,
  Layout as LayoutIcon,
  Search,
  CheckCircle2,
  AlertCircle,
  X,
  Download
} from 'lucide-react';
import { PROTOCOLS, COLORS } from './constants';
import { MajorTab, TestProtocol } from './types';

export default function App() {
  const [activeMajorTabId, setActiveMajorTabId] = useState(PROTOCOLS[0].id);
  const [activeSubTabId, setActiveSubTabId] = useState(PROTOCOLS[0].subTabs[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDownload = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeMajorTab = useMemo(() => 
    PROTOCOLS.find(t => t.id === activeMajorTabId) || PROTOCOLS[0]
  , [activeMajorTabId]);

  const activeSubTab = useMemo(() => 
    activeMajorTab.subTabs.find(t => t.id === activeSubTabId) || activeMajorTab.subTabs[0]
  , [activeMajorTab, activeSubTabId]);

  const handleMajorTabChange = (id: string) => {
    setActiveMajorTabId(id);
    const firstSubTab = PROTOCOLS.find(t => t.id === id)?.subTabs[0];
    if (firstSubTab) {
      setActiveSubTabId(firstSubTab.id);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F6] text-[#1A1A1A] font-sans flex flex-col overflow-x-hidden">
      {/* Header / Brand Bar */}
      <header className="h-20 bg-[#0070FF] flex items-center justify-between px-6 md:px-10 border-b-4 border-[#7BFF00] shrink-0 sticky top-0 z-50">
        <div className="flex flex-col">
          <span className="text-[#7BFF00] font-black text-[10px] md:text-xs tracking-widest uppercase">Tennis Australia</span>
          <h1 className="text-white font-black text-lg md:text-xl leading-tight tracking-tight uppercase">Physical Testing & Monitoring</h1>
        </div>
        
        <nav className="hidden lg:flex h-full">
          {PROTOCOLS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleMajorTabChange(tab.id)}
              className={`
                px-6 text-xs font-black uppercase tracking-widest h-full flex items-center transition-all border-t-4
                ${activeMajorTabId === tab.id 
                  ? 'text-[#003A85] bg-[#F4F7F6] border-[#7BFF00]' 
                  : 'text-white border-transparent hover:bg-[#005CCF]'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile Major Nav (Simple Dropdown feel) */}
        <div className="lg:hidden">
          <Activity className="text-[#7BFF00]" size={24} />
        </div>
      </header>

      {/* Mobile-only Major Tabs Scroller */}
      <nav className="lg:hidden flex bg-[#0046a1] overflow-x-auto scroller-hide shrink-0">
        {PROTOCOLS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleMajorTabChange(tab.id)}
            className={`
              px-6 py-4 text-[10px] font-black uppercase tracking-widest whitespace-nowrap
              ${activeMajorTabId === tab.id ? 'bg-[#F4F7F6] text-[#0070FF]' : 'text-white'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Sub-Navigation Bar */}
      <nav className="h-14 bg-white border-b border-gray-200 flex items-center px-4 md:px-10 gap-2 overflow-x-auto scroller-hide z-10 shrink-0">
        {activeMajorTab.subTabs.map((subTab) => (
          <button
            key={subTab.id}
            onClick={() => setActiveSubTabId(subTab.id)}
            className={`
              px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-colors
              ${activeSubTabId === subTab.id
                ? 'bg-[#0070FF] text-white'
                : 'hover:bg-gray-100 text-gray-400'
              }
            `}
          >
            {subTab.title.includes('(') ? subTab.title.match(/\(([^)]+)\)/)?.[1] || subTab.title : subTab.title}
          </button>
        ))}
      </nav>

      {/* Main Content Stage */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-white">
        
        {/* Protocol Details - Full Width & Centered */}
        <section className="w-full max-w-4xl mx-auto p-6 md:p-12 lg:p-20 relative">
          {/* Stencil Background Text */}
          <div className="stencil-text text-[20vw] md:text-[15vw] top-10 left-10 leading-none select-none opacity-[0.03]">
            {activeSubTabId.substring(0, 4)}
          </div>

          <motion.div
            key={`content-${activeSubTabId}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="bg-[#7BFF00] text-black font-black px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-sm">
                Protocol {activeSubTab.id.toUpperCase()}
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black leading-[0.9] tracking-tighter text-[#1A1A1A] mb-10 uppercase break-words">
              {activeSubTab.title.includes('(') ? (
                <>
                  {activeSubTab.title.split(' (')[0]}
                  <span className="block text-xl md:text-2xl lg:text-3xl text-slate-300 mt-2">
                    ({activeSubTab.title.split(' (')[1]}
                  </span>
                </>
              ) : activeSubTab.title}
            </h2>
            
            <div className="space-y-8">
              {/* Description / Goal */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <span className="bg-black text-[#7BFF00] font-black px-3 py-2 text-xs shrink-0 uppercase tracking-widest shadow-lg">
                  Key Objective
                </span>
                <p className="text-xl md:text-2xl font-semibold leading-snug text-slate-800 italic decoration-[#7BFF00] decoration-4 underline-offset-4">
                  {activeSubTab.description}
                </p>
              </div>

              {/* Warm-Up (Conditional) */}
              {activeSubTab.warmup && (
                <div className="bg-amber-50 p-6 md:p-8 border-l-[12px] border-amber-400 rounded-r-2xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Timer size={20} className="text-amber-500" />
                    <span className="text-xs font-black tracking-[0.2em] text-amber-700 uppercase">Preparation Protocol</span>
                  </div>
                  <p className="text-base md:text-lg font-bold text-amber-900 leading-relaxed whitespace-pre-wrap">
                    {activeSubTab.warmup}
                  </p>
                </div>
              )}

              {/* Procedure */}
              {activeSubTab.procedure && (
                <div className="pt-2">
                  <h3 className="text-xs font-black tracking-[0.3em] text-[#0070FF] uppercase mb-6 flex items-center gap-4">
                    {activeSubTab.id === 'overview' ? 'Benefits of Performance Testing' : 'Execution Steps'}
                    <div className="h-px bg-[#0070FF]/20 flex-1" />
                  </h3>
                  <div className="grid gap-6 md:gap-8">
                    {activeSubTab.procedure.map((step, idx) => (
                      <div key={idx} className="group flex gap-6 md:gap-10 border-b border-slate-100 pb-6 md:pb-8 last:border-0">
                        <span className="text-slate-200 font-serif italic text-4xl md:text-6xl leading-none group-hover:text-[#7BFF00] transition-all duration-300 transform group-hover:scale-110">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="flex flex-col justify-center gap-2">
                           {typeof step === 'string' ? (
                             <p className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
                               {step}
                             </p>
                           ) : (
                             <>
                               <p className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 leading-tight">
                                 {step.title}
                               </p>
                               <div className="flex flex-col gap-2 mt-1">
                                 {Array.isArray(step.subtitle) ? (
                                   step.subtitle.map((sub, i) => (
                                     <div key={i} className="flex gap-2 items-start">
                                       <div className="w-1.5 h-1.5 rounded-full bg-[#7BFF00] mt-1.5 shrink-0" />
                                       <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">
                                         {sub}
                                       </p>
                                     </div>
                                   ))
                                 ) : (
                                   <div className="flex gap-2 items-start">
                                     <div className="w-1.5 h-1.5 rounded-full bg-[#7BFF00] mt-1.5 shrink-0" />
                                     <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">
                                       {step.subtitle}
                                     </p>
                                   </div>
                                 )}
                               </div>
                             </>
                           )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab.showImagePlaceholder && (
                <div className={`mt-8 flex flex-col items-center bg-white border-2 border-slate-100 p-6 md:p-10 rounded-[2.5rem] shadow-sm ${activeSubTab.id === 'sj' ? 'w-full' : ''}`}>
                  <div className={`w-full flex flex-col md:flex-row gap-6 items-center justify-center`}>
                    {(Array.isArray(activeSubTab.imagePath) ? activeSubTab.imagePath : [activeSubTab.imagePath || '/Warm-Up.jpg']).map((path, i) => (
                      <div key={i} className="flex flex-col gap-3 flex-1 w-full max-w-sm md:max-w-none">
                        <button 
                          onClick={() => setSelectedImage(path)}
                          className="aspect-[4/3] md:aspect-[3/4] w-full bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-slate-200 relative overflow-hidden group shadow-md transition-all hover:ring-8 hover:ring-[#7BFF00]/20 hover:border-[#7BFF00]"
                        >
                          <img 
                            src={path} 
                            alt={`${activeSubTab.title} Reference ${i + 1}`}
                            className="w-full h-full object-contain p-2"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                            <div className="bg-[#7BFF00] text-black p-3 rounded-full scale-50 group-hover:scale-100 transition-transform">
                              <Search size={24} strokeWidth={3} />
                            </div>
                          </div>
                        </button>
                        {(activeSubTab.id === 'sj' || activeSubTab.id === 'cmj' || activeSubTab.id === 'rht' || activeSubTab.id === 'dj' || activeSubTab.id === 'imtp' || activeSubTab.id === 'belt' || activeSubTab.id === 'ankle' || activeSubTab.id === 'hip-add-abd' || activeSubTab.id === 'hip-flexion' || activeSubTab.id === 'hip-extension') && (
                          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                            {path.includes('trace') ? 'Force-Time Curve' : 'Test Execution'}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence>
                {selectedImage && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-10"
                  >
                    {/* Top Action Bar */}
                    <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-[110]">
                      <div className="flex flex-col">
                        <span className="text-[#7BFF00] font-black text-[10px] tracking-[0.2em] uppercase">Document Preview</span>
                        <h3 className="text-white font-black text-lg uppercase tracking-tight">
                          {activeSubTab.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(selectedImage, `Tennis-Australia-${activeSubTabId}-${selectedImage.split('/').pop()}`);
                          }}
                          className="flex items-center gap-2 bg-white/10 hover:bg-[#7BFF00] text-white hover:text-black px-4 py-2 rounded-full font-black uppercase text-[10px] tracking-widest transition-all group"
                        >
                          <Download size={16} className="group-hover:scale-110 transition-transform" />
                          <span>Download File</span>
                        </button>
                        <button 
                          onClick={() => setSelectedImage(null)}
                          className="flex items-center gap-2 bg-[#FF3B30] hover:bg-[#FF453A] text-white px-4 py-2 rounded-full font-black uppercase text-[10px] tracking-widest transition-all group shadow-xl"
                        >
                          <span>Close</span>
                          <X size={16} className="group-hover:rotate-90 transition-transform" />
                        </button>
                      </div>
                    </div>

                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="relative max-w-5xl w-full max-h-full flex items-center justify-center pt-20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img 
                        src={selectedImage} 
                        alt="Protocol Reference Full"
                        className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-xl shadow-2xl border-4 border-white/20 select-none"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Floating Bottom Hint */}
                      <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                        Click outside image to close
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Technical Metadata (Scoring, Trials, Starting Pos) */}
              <div className="grid md:grid-cols-2 gap-6 pt-6">
                {activeSubTab.scoring && (
                  <div className="p-8 bg-[#0070FF] text-white rounded-3xl shadow-xl transition-transform hover:-translate-y-1">
                    {activeSubTab.id !== 'overview' && activeSubTab.id !== 'testing-warmup' && (
                      <span className="text-[10px] font-black tracking-[0.3em] text-blue-200 uppercase block mb-2">Inspect the results before uploading</span>
                    )}
                    {Array.isArray(activeSubTab.scoring) ? (
                      <div className="flex flex-col gap-2">
                        <span className="text-xl md:text-2xl font-black italic uppercase leading-tight whitespace-pre-wrap">
                          {activeSubTab.scoring[0]}
                        </span>
                        <ul className="space-y-2 mt-2">
                          {activeSubTab.scoring.slice(1).map((point, i) => (
                            <li key={i} className="flex gap-3 items-start text-xs md:text-sm font-bold text-blue-50 italic uppercase leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7BFF00] mt-1.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <span className="text-xl md:text-2xl font-black italic uppercase leading-none">{activeSubTab.scoring}</span>
                    )}
                  </div>
                )}
                {activeSubTab.trials && (
                  <div className="p-8 bg-black text-white rounded-3xl shadow-xl transition-transform hover:-translate-y-1">
                    <span className="text-[10px] font-black tracking-[0.3em] text-[#7BFF00] uppercase block mb-3">Required Volume</span>
                    {Array.isArray(activeSubTab.trials) ? (
                      <div className="flex flex-col gap-3">
                        <span className="text-xl md:text-2xl font-black italic uppercase leading-tight">
                          {activeSubTab.trials[0]}
                        </span>
                        <ul className="space-y-2">
                          {activeSubTab.trials.slice(1).map((point, i) => (
                            <li key={i} className="flex gap-3 items-start text-xs md:text-sm font-bold text-slate-400 italic uppercase leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7BFF00] mt-1.5 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <span className="text-xl md:text-2xl font-black italic uppercase leading-none">{activeSubTab.trials}</span>
                    )}
                  </div>
                )}
                {activeSubTab.startingPosition && (
                  <div className="md:col-span-2 p-8 bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
                    <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase block mb-4">Initial Setup / Starting Position</span>
                    <div className="flex flex-wrap gap-3">
                      {activeSubTab.startingPosition.map((pos, idx) => (
                        <span key={idx} className="bg-white text-slate-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm border border-slate-200">
                          {pos}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Call to Action - VALD Academy */}
            <a 
              href="https://resources.vald.com/vald-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 p-8 md:p-12 bg-slate-50 border-4 border-black flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer hover:bg-black transition-all block"
            >
              <div className="text-center md:text-left">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 group-hover:text-[#7BFF00] block mb-2">Technical Education</span>
                <h4 className="text-xl md:text-2xl font-black uppercase text-slate-900 group-hover:text-white">Access VALD Academy Resources</h4>
                <p className="text-sm font-bold text-slate-500 group-hover:text-slate-300 mt-2">Self-paced learning on VALD testing protocols and metrics.</p>
              </div>
              <div className="w-16 h-16 bg-[#7BFF00] rounded-full flex items-center justify-center shrink-0 shadow-lg group-hover:scale-125 transition-transform">
                <ChevronRight className="text-black" size={32} />
              </div>
            </a>
          </motion.div>
        </section>
      </main>


      {/* Footer / Status Bar */}
      <footer className="h-10 bg-black text-white flex items-center justify-between px-6 md:px-10 shrink-0">
        <div className="flex items-center gap-6">
          <span className="text-[9px] font-bold tracking-widest opacity-60 uppercase whitespace-nowrap">© 2026 Tennis Australia High Performance</span>
        </div>
      </footer>
    </div>
  );
}
