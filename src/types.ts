export interface ProtocolStep {
  text: string;
  type?: 'step' | 'cue' | 'note';
}

export interface TestProtocol {
  id: string;
  title: string;
  description: string;
  warmup?: string;
  procedure?: (string | { title: string; subtitle: string | string[] })[];
  scoring?: string | string[];
  trials?: string | string[];
  startingPosition?: string[];
  cues?: string[];
  showImagePlaceholder?: boolean;
  imagePath?: string | string[];
}

export interface TabGroup {
  id: string;
  label: string;
  subTabs: TestProtocol[];
}

export interface MajorTab {
  id: string;
  label: string;
  icon?: string;
  groups: TabGroup[];
}
