import { MajorTab } from './types';

export const COLORS = {
  blue: '#0070FF',
  green: '#7BFF00',
  darkBlue: '#0046a1',
  lightGrey: '#f4f7f6',
  white: '#ffffff',
};

export const PROTOCOLS: MajorTab[] = [
  {
    id: 'background',
    label: 'Background',
    groups: [
      {
        id: 'bg-info',
        label: 'Information',
        subTabs: [
          {
            id: 'overview',
            title: 'Performance Coach Education: Background',
            description: 'Standardised testing creates an objective biomechanical blueprint of each player—highlighting force-production capacity, physiological capacity, movement efficiency, and potential injury risks that aren’t visible through observation alone.',
            procedure: [
              'Supporting prediction of performance readiness and development trajectory.',
              'Assessing short and long-term training adaptations.',
              'Providing objective basis for individualised training prescription.',
              'Informing selection and return-to-play decisions.',
              'Providing objective basis for individualised training prescription.',
              'Comparing performance outputs across high-performance centres within the TA system.',
              'Evaluating the relationship between physical development and performance outcomes across tournament cycles.'
            ],
            scoring: [
              'The testing battery includes both:',
              'Formal testing sessions, conducted at key time points in the annual performance plan; and',
              'weekly monitoring integrated within the daily training environment to track readiness and adaptation.'
            ]
          },
          {
            id: 'testing-warmup',
            title: 'Testing Warm-Up',
            description: 'Standardised preparation protocol to ensure physiological readiness for maximal testing efforts.',
            procedure: [
              { 
                title: 'Blood Flow (5mins) - Light Aerobic Activity',
                subtitle: 'Begin with 5min steady-state movement such as bike or treadmill to increase core temp and blood flow.'
              },
              { 
                title: 'Mobilise (5mins) - Prioritise Hips & Lower Back',
                subtitle: 'Focus on dynamic range of motion exercises to prepare the posterior chain and pelvic region for heavy loading. See below for circuit ideas.'
              },
              { 
                title: 'Neural Prime (1-2mins) - Test-Specific Isometrics',
                subtitle: 'Perform two sets at 75% and 85% to wake up the nervous system without inducing fatigue. See below for Isometric Exercise Ideas.'
              },
              { 
                title: 'Fire Up (1-2mins) - Explosive Power & Reactivity',
                subtitle: [
                  'Squat & Countermovement Jumps: Perform 5 SJ followed by 5 CMJ, building to 85% with 30s break between sets',
                  'Pogos for Ankle Stiffness: Complete 10 pogos via ball of feet and limited knee bend, reaching full jump height by the end of the set.'
                ]
              }
            ],
            showImagePlaceholder: true,
            imagePath: '/TA-Testing-Protocols/Warm-Up.jpg',
            scoring: 'Follow the Warm-Up Protocol above. Click the image to expand and download.'
          }
        ]
      }
    ]
  },
  {
    id: 'assess',
    label: 'Assess (Protocols)',
    groups: [
      {
        id: 'forcedecks',
        label: 'ForceDecks',
        subTabs: [
          {
            id: 'sj',
            title: 'Squat Jump Test (SJ)',
            description: 'Isolates purely concentric power by removing the "elastic bounce" of the stretch-shortening cycle (SSC).',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/SJ.jpg', '/TA-Testing-Protocols/SJ_trace.jpg'],
            procedure: [
              {
                title: 'Forcedecks System Setup',
                subtitle: [
                  'Zero plates: Ensure nothing is touching the plates during this step.',
                  'Weigh Athlete: Measure the athlete\'s body mass, instructing them to remain completely still until Forcedecks software indicates body mass has been captured.',
                  'Assume start position: Normal standing posture, hands on hips and chest up looking forward.'
                ]
              },
              'Squat to self-selected depth (approx. 90 degrees).',
              'Hold static position for 3 seconds ("Like a statue").',
              'On command "3, 2, 1, JUMP!", perform max vertical effort.',
              'No extra "dip" or countermovement allowed.'
            ],
            scoring: "If the Tester notices a significant 'dip' in the force trace the precedes the jump (indicating a CMJ), that rep is deleted before uploading to the cloud.",
            trials: [
              '5 maximal effort jumps for the test',
              'Or until the tester is confident the athlete has produced their best result.'
            ]
          },
          {
            id: 'cmj',
            title: 'Countermovement Jump (CMJ)',
            description: 'Measures explosive lower-body power and efficiency in transferring energy from braking to propulsion.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/CMJ.jpg', '/TA-Testing-Protocols/CMJ_trace.jpg'],
            procedure: [
              {
                title: 'Forcedecks System Setup',
                subtitle: [
                  'Zero plates: Ensure nothing is touching the plates during this step.',
                  'Weigh Athlete: Measure the athlete\'s body mass, instructing them to remain completely still until Forcedecks software indicates body mass has been captured.',
                  'Assume start position: Normal standing posture, hands on hips and chest up looking forward.'
                ]
              },
              'Rapid downward movement (dip) followed immediately by maximal vertical jump.',
              'Land softly on plates and hold for 1 second.',
              '3-second reset between reps.'
            ],
            scoring: "If using CMJ for weekly monitoring, ensure you control for as many variables as possible to ensure data is consistent and changes are real.",
            trials: [
              '5 maximal effort jumps for the test',
              'Or until the tester is confident the athlete has produced their best result.'
            ]
          },
          {
            id: 'rht',
            title: 'Repeated Hop Test (12/5 RHT)',
            description: 'Assesses reactive strength and ankle stiffness.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/DL_Hop.jpg', '/TA-Testing-Protocols/DL_hop_trace.jpg'],
            procedure: [
              {
                title: 'Forcedecks System Setup',
                subtitle: [
                  'Zero plates: Ensure nothing is touching the plates during this step.',
                  'Weigh Athlete: Measure the athlete\'s body mass, instructing them to remain completely still until Forcedecks software indicates body mass has been captured.',
                  'Assume start position: Normal standing posture, hands on hips and chest up looking forward.'
                ]
              },
              'Perform 12 rapid vertical hops with minimal ground contact.',
              'Maintain "stiff" knees and ankles.',
              'Focus on jumping "like a spring".'
            ],
            scoring: "Inspecting the balance of jump height and contact time will allow feedback to the athlete on how stiff the jumps were performed.",
            trials: 'Best 5 consecutive jumps analyzed by software.'
          },
          {
            id: 'dj',
            title: 'Drop Jump Test (DJ)',
            description: 'Assesses the transition from landing to take-off (Fast SSC efficiency).',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Drop_jump.jpeg', '/TA-Testing-Protocols/Drop_jump_trace.jpeg'],
            procedure: [
              {
                title: 'Box Height Profiling (Initial Assessment)',
                subtitle: [
                  "To determine the athlete's optimal drop height: Perform drop jumps from 3 box heights (i.e., 20cm, 30cm and 40cm) to inspect which is best",
                  "Key is to find a box height that is not too high to land comfortably from, and not too low that they jump significantly higher than the box height."
                ]
              },
              {
                title: 'Forcedecks System Setup',
                subtitle: [
                  'Zero plates: Ensure nothing is touching the plates during this step.',
                  'Weigh Athlete: Measure the athlete\'s body mass, instructing them to remain completely still until Forcedecks software indicates body mass has been captured.',
                  'Assume start position: Normal standing posture, hands on hips and chest up looking forward.'
                ]
              },
              'Step (do not jump) off the box, keep hips level to the top of the box before dropping.',
              'Land with both feet on plates simultaneously.',
              'Immediately react and jump for maximum height.',
              'Minimize ground contact time.'
            ],
            scoring: "Inspecting the balance of jump height and contact time will allow feedback to the athlete on how stiff the jumps were performed.",
            trials: 'Perform at least 3 trials from the appropriate height, or until the tester believes they stop improving RSI by adjusting strategy.'
          },
          {
            id: 'imtp',
            title: 'Isometric Mid-Thigh Pull (IMTP)',
            description: 'Measures maximal whole-body strength using an immovable bar.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/IMTP.jpg', '/TA-Testing-Protocols/IMTP_trace.jpg'],
            warmup: 'BB Jump Shrugs x 8, 1 pull @ 60% effort, 1 pull @ 80% effort.',
            procedure: [
              'Set bar to mid-thigh height (120-135° knee angle).',
              {
                title: 'Forcedecks System Setup',
                subtitle: [
                  'Zero plates: Ensure nothing is touching the plates during this step.',
                  'Weigh Athlete: Measure the athlete\'s body mass, instructing them to remain completely still until Forcedecks software indicates body mass has been captured.',
                  'Assume start position: Normal standing posture, hands on hips and chest up looking forward.'
                ]
              },
              'Use lifting straps for grip security.',
              'Apply pre-tension (<50N) "Take the slack out".',
              'On "GO!", drive into the ground maximally for 5 seconds.',
              'Verbal cues: "PULL, PULL, PULL!"'
            ],
            scoring: "Ensure the force trace appears like a rectangle. Maximal rate of force, then holding peak force steady for the duration of the rep.",
            trials: '2 maximal efforts with 4-minute rest interval.'
          },
          {
            id: 'belt',
            title: 'Isometric Belt Squat (Belt Squat)',
            description: 'Sport-specific maximal strength drive against a hip belt.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Belt.jpg', '/TA-Testing-Protocols/Belt_trace.jpg'],
            warmup: '1 pull @ 60% effort, 1 pull @ 80% effort.',
            procedure: [
              'Attach belt around hips at 120-135° knee angle.',
              {
                title: 'Forcedecks System Setup',
                subtitle: [
                  'Zero plates: Ensure nothing is touching the plates during this step.',
                  'Weigh Athlete: Measure the athlete\'s body mass, instructing them to remain completely still until Forcedecks software indicates body mass has been captured.',
                  'Assume start position: Normal standing posture, hands on hips and chest up looking forward.'
                ]
              },
              'Apply pre-tension (<50N) "Take the slack out".',
              'On "GO!", drive into the ground maximally for 5 seconds.',
              'Verbal cues: "PULL, PULL, PULL!."'
            ],
            scoring: "Ensure the force trace appears like a rectangle. Maximal rate of force, then holding peak force steady for the duration of the rep.",
            trials: '2 maximal efforts with 4-minute rest interval.'
          },
          {
            id: 'ankle',
            title: 'Ankle Push',
            description: 'Isolates plantarflexor force production capacity.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Ankle.jpg', '/TA-Testing-Protocols/Ankle_trace.jpg'],
            warmup: '1 push @ 60%, 1 push @ 80% effort.',
            procedure: [
              {
                title: 'Forcedecks System Setup',
                subtitle: [
                  'Zero plates: Ensure nothing is touching the plates during this step.',
                  'Weigh Athlete: Measure the athlete\'s body mass, instructing them to remain completely still until Forcedecks software indicates body mass has been captured.',
                  'Assume start position: Normal standing posture, hands on hips and chest up looking forward.'
                ]
              },
              {
                title: 'Bar and Body Positioning',
                subtitle: [
                  'Bar to be positioned across the shoulders to restrain upward movement.',
                  'Active leg placed on the plate with ball of foot underneath the bar.',
                  'Knee and hip fully extended.',
                  'Inactive leg lifted to hip height.'
                ]
              },
              'Build pressure over 2 seconds.',
              'Drive into plate maximally for 3 seconds.',
              'Maintain rigid ankle angle.',
              'Verbal cues: "PUSH, PUSH, PUSH!."'
            ],
            scoring: "Ensure the force trace appears like a rectangle. Maximal rate of force, then holding peak force steady for the duration of the rep.",
            trials: '2 maximal efforts with 4-minute rest interval.'
          }
        ]
      },
      {
        id: 'forceframe',
        label: 'ForceFrame',
        subTabs: [
          {
            id: 'hip-add-abd',
            title: 'Hip Add/Abd',
            description: 'Assessment of groin and glute strength/symmetry.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/AbAd.jpg', '/TA-Testing-Protocols/AbAd_trace.jpg'],
            warmup: 'ForceFrame Warm-Up: 3 x3sec @ 50%, 75% and 90-95% (near max) each side.',
            procedure: [
              'Crossbar Rotation set to 180 degrees.',
              "Paddle position set to FLAT.",
              {
                title: 'Testing Position',
                subtitle: [
                  'In supine, neutral spine and head on a soft pad.',
                  'Legs are straight and body aligned in the ForceFrame so that the inside (medial malleolus) and outside (lateral malleolus) of ankles are aligned to the pads.',
                  "Arms are crossed over the chest to ensure upper body doesn't create additional leverage."
                ]
              },
              {
                title: 'Perform Test:',
                subtitle: [
                  'Keep toes pointed up.',
                  'Starting with bilateral ADDUCTION, cue the athlete to push against the inner pads for 5 maximal seconds.',
                  'Relax for 5 seconds.',
                  'Change to bilateral ABDUCTION, cue the athlete to push against the outer pads for 5 maximal seconds.'
                ]
              },
              'Verbal cues: Push, Push, Push'
            ],
            trials: '3 reps for each direction.',
            scoring: "Ensure the force trace appears like a rectangle. Maximal rate of force, then holding peak force steady for the duration of the rep."
          },
          {
            id: 'hip-flexion',
            title: 'Hip Flexion',
            description: 'Assessment of hip flexion strength and symmetry.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Hipflexion.jpg', '/TA-Testing-Protocols/Hipflexion_trace.jpg'],
            warmup: 'ForceFrame Warm-Up: 3 x3sec @ 50%, 75% and 90-95% (near max) each side.',
            procedure: [
              'Crossbar Rotation set to 180 degrees.',
              "Paddle position set to FLAT.",
              {
                title: 'Testing Position',
                subtitle: [
                  'In supine, hip and knee bent to 90°.',
                  'Head on a soft pad, neutral spine.',
                  "Arms are crossed over the chest to ensure upper body doesn't create additional leverage."
                ]
              },
              {
                title: 'Perform Test:',
                subtitle: [
                  'Maintain 90° hip and knee angle.',
                  'Starting with the designated leg, drive knee upward into the force frame pad for 5 maximal seconds.',
                  'Relax for 5 seconds.',
                  'Repeat for the opposite leg.'
                ]
              },
              'Verbal cues: Push, Push, Push'
            ],
            trials: '3 reps per leg.',
            scoring: "Ensure the force trace appears like a rectangle. Maximal rate of force, then holding peak force steady for the duration of the rep."
          },
          {
            id: 'hip-extension',
            title: 'Hip Extension',
            description: 'Assessment of hip extension strength and symmetry.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/HipExt.jpg', '/TA-Testing-Protocols/HipExt_trace.jpg'],
            warmup: 'ForceFrame Warm-Up: 3 x3sec @ 50%, 75% and 90-95% (near max) each side.',
            procedure: [
              'Crossbar Rotation set to 180 degrees.',
              "Paddle position set to FLAT.",
              {
                title: 'Testing Position',
                subtitle: [
                  'Prone position, resting leg straight and outside the ForceFrame rig, testing leg is inside and knee bent to 90 degrees.',
                  'Arms placed on the ground above shoulder with head resting on top of them, looking to one side.'
                ]
              },
              {
                title: 'Perform Test:',
                subtitle: [
                  'Keep resting leg straight.',
                  'Starting with the designated leg, bent at 90 degrees, drive thigh and heel of foot upwards into the force frame pad for 5 maximal seconds.',
                  'Relax for 5 seconds.',
                  'Repeat for the opposite leg.'
                ]
              },
              'Verbal cues: Push, Push, Push'
            ],
            trials: '3 reps per leg.',
            scoring: "Ensure the force trace appears like a rectangle. Maximal rate of force, then holding peak force steady for the duration of the rep."
          },
          {
            id: 'shoulder-rot',
            title: 'Shoulder IR/ER',
            description: 'Shoulder internal and external strength (and serving arm symmetry).',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Shoulder.jpg', '/TA-Testing-Protocols/Shoulder_trace.jpg'],
            warmup: '- Shoulder wall slides x 10, SA Band Chest Press x 10, Band Pull Apart x 12, Band ER/IR @ 90° abduction x 8.\n- ForceFrame Warm-Up: 3 x3sec @ 50%, 75% and 90-95% (near max) each side.',
            procedure: [
              'Crossbar Rotation set to 90 degrees.',
              "Paddle position set to NARROW.",
              {
                title: 'Testing Position',
                subtitle: [
                  'Supine, turned sideways to the ForceFrame rig, elbow at 90° flexion / 90° abduction and in line with the shoulder.',
                  "Non-testing arm placed across the chest."
                ]
              },
              {
                title: 'Perform Test:',
                subtitle: [
                  'Maintain 90° elbow flexion and 90° abduction. Heel of palm aligned with pads for each test.',
                  'External Rotation: Push back against outer pad for 5 maximal seconds.',
                  'Internal Rotation: Push forward against inner pad for 5 maximal seconds.',
                  'Relax for 5 seconds between efforts.',
                  'Repeat for the opposite arm.'
                ]
              },
              'Verbal cues: Push, Push, Push'
            ],
            trials: '3 sets of 5s efforts.',
            scoring: 'Ensure the force trace appears like a rectangle. Maximal rate of force, then holding peak force steady for the duration of the rep.'
          }
        ]
      },
      {
        id: 'field-tests',
        label: 'Field Tests',
        subTabs: [
          {
            id: 'speed-accel',
            title: 'Speed & Acceleration (5m/10m)',
            description: 'Measures explosive horizontal force and maximal acceleration.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Accel.jpg'],
            warmup: '- Ensure the testing warm up has been completed\n- 2 x 10m accelerations @ 75% and 85%.',
            procedure: [
              'SmartSpeed Timing gates set at 0m, 5m, and 10m.',
              'In SmartSpeed app ensure test is set up for ONE-WAY TIMING DRILL.',
              '2-point stance, lead toe 50cm behind start gate.',
              'Timing gates at 0m, 5m, and 10m. ~1.5m lane width. >10m run off past final gate.',
              'Maximal acceleration through final gate (use cones just beyond final gate as a decel mark).'
            ],
            trials: '2-3 trials. 2 min rest.',
            scoring: ['Split times (s) to 0.01 accuracy.', 'Ensure athlete begins from static start, not swinging body or arms to break the first gate beam.']
          },
          {
            id: 'cod-10-5',
            title: '10-0-5m COD',
            description: 'Assessment of braking and re-acceleration capacity.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/COD.jpg'],
            warmup: '- Ensure the testing warm up has been completed\n- 2 x 10-0-5m (1 x left, 1 x right turn) @ 75% and 85%.',
            procedure: [
              'SmartSpeed Timing gates set at 0m, 5m and 10m. ~1.5m lane width. >10m run off past final gate.',
              'In SmartSpeed app ensure test is set up for CUSTOM DRILL / FREE TIMING. Set number of test reps to 2, and lower the gate re-arm timing to 300ms.',
              '2-point stance, lead toe 50cm behind start gate.',
              'Sprint 10m to line, 180° turn as quickly as possible, sprint back 5m.',
              'Turn using specified leg (R/L trials separate).',
              'Foot must touch/cross the turning line.',
              'Maximal acceleration through final gate (at 5m mark).'
            ],
            trials: '2 maximal tests per side.',
            scoring: ['Total time (s).', 'Ensure athlete begins from static start, not swinging body or arms to break the first gate beam.']
          },
          {
            id: 'yoyo',
            title: 'Yo-yo Level 1',
            description: 'Assessment of high-intensity intermittent aerobic capacity.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Yoyo.jpg'],
            procedure: [
              '2x20m shuttle runs synced to audio.',
              '10s active recovery (5m walk and back).',
              'Speed increments automatically.',
              'Test terminates on 2nd technical warning.'
            ],
            scoring: 'Final Level reached + Distance (m), Estimated VO2Max.'
          },
          {
            id: 'vertec',
            title: 'Vertical Jump (Vertec)',
            description: 'Field test for assessing lower body explosive power.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/vertec.jpg'],
            procedure: [
              'Determine standing reach height by standing under the vanes and reaching, with shoulder elevation, the highest vane possible with feet flat on the ground.',
              'Jump from static start (no step), landing in approximately the same position as take off.',
              'Jump maximally to displace the highest possible vane with fingertips of dominant hand.'
            ],
            trials: 'Best of 3 attempts.',
            scoring: [
              'Ensure consistent technique (e.g., arm swing is permitted).\nJump Height (Reach Displacement) in cm',
              'Calculated by highest vane reached minus standing reach height.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'interpret',
    label: 'Interpret (Metrics)',
    groups: [
      {
        id: 'forcedecks-metrics',
        label: 'ForceDecks',
        subTabs: [
          {
            id: 'forcedecks-metrics-overview',
            title: 'ForceDecks Metrics Interpretation',
            description: 'Understanding key metrics from ForceDecks analysis.',
            procedure: [
              'Analyzing Peak Force and Relative Peak Force.',
              'Interpreting Rate of Force Development (RFD).',
              'Understanding Force at specific time intervals.'
            ],
            scoring: 'Refer to specific metric guidelines for each test.'
          },
          {
            id: 'sj-metrics',
            title: 'Squat Jump (SJ)',
            description: 'Concentric-only power metrics.',
            procedure: [
              'Peak Force: Maximum force produced during the concentric move.',
              'Relative Peak Force (N/kg): Force relative to body weight; key for comparing athletes.',
              'Jump Height: Vertical displacement via the impulse-momentum method.'
            ],
            scoring: 'Identify concentric-only capacity without the assistance of the stretch-shortening cycle.'
          },
          {
            id: 'cmj-metrics',
            title: 'Countermovement Jump (CMJ)',
            description: 'The CMJ assesses lower-body power and how effectively force can be produced during a rapid stretch-shortening cycle. These metrics help us understand explosive performance, strengths, and training priorities for tennis.',
            procedure: [
              {
                title: 'JUMP HEIGHT (IMPULSE MOM) (CM)',
                subtitle: [
                  'WHAT IT MEANS: The vertical height achieved during the jump, calculated from impulse. Higher jump height indicates greater overall lower-body power.',
                  'WHY IT MATTERS: Key indicator of explosive power for jumping, serving and court movements. Supports acceleration, deceleration and change of direction. Higher jump = more potential to generate force on court.',
                  'STRENGTH ATTRIBUTE: Relative Strength (Lower Body Power)',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK CONCENTRIC FORCE (N) OR (N/kg)',
                subtitle: [
                  'WHAT IT MEANS: The highest force produced during the upward (concentric) phase of the jump, in Newtons or relative to body weight.',
                  'WHY IT MATTERS: Reflects maximal force production capability. Important for groundstrokes, serves and recovery. Useful for monitoring strength development over time.',
                  'STRENGTH ATTRIBUTE: Strength Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'CON IMPULSE @ 100 ms (N·s)',
                subtitle: [
                  'WHAT IT MEANS: The impulse generated in the first 100 milliseconds of the concentric phase. Represents ability to produce force rapidly.',
                  'WHY IT MATTERS: Critical for explosive actions like split step, first step and quick reactions. Higher early impulse = better rate of force development (RFD).',
                  'STRENGTH ATTRIBUTE: Rapid Force Production (Ready & React)',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'COUNTERMOVEMENT DEPTH (CM)',
                subtitle: [
                  'WHAT IT MEANS: The downward movement distance during the countermove before the upward phase. Shows how deep the athlete uses the countermovement.',
                  'WHY IT MATTERS: Influences utilization of the stretch–shortening cycle. Dependent on athlete strategy, leg length and health. Useful for understanding movement strategies.',
                  'STRENGTH ATTRIBUTE: Movement Strategy & Mechanics',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'MEAN CONCENTRIC FORCE (N) OR (N/kg)',
                subtitle: [
                  'WHAT IT MEANS: The average force produced throughout the entire concentric phase. Indicates the ability to sustain force production through the jump.',
                  'WHY IT MATTERS: Supports assessment of overall force production efficiency. Important for longer ground contact actions and repeated efforts. Tracks strength improvements.',
                  'STRENGTH ATTRIBUTE: Strength Capacity (Sustained)',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'CONC IMP (ABS / BM) (N·s) OR (N·s/kg)',
                subtitle: [
                  'WHAT IT MEANS: The total impulse generated during the concentric phase, absolute or relative to body mass. Represents total momentum produced.',
                  'WHY IT MATTERS: Measures total force over time (force x time). Related to jump height and overall power. Useful for performance benchmarking.',
                  'STRENGTH ATTRIBUTE: Power Capacity',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'ECCENTRIC PEAK FORCE (N)',
                subtitle: [
                  'WHAT IT MEANS: The highest force produced during the downward (eccentric) phase. Reflects ability to absorb and control force.',
                  'WHY IT MATTERS: Indicates strength in deceleration and landing mechanics. Higher values = better ability to absorb force in decel phase. Important for injury prevention and change of direction.',
                  'STRENGTH ATTRIBUTE: Eccentric Strength & Deceleration',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'WHAT DOES A "GOOD" CMJ LOOK LIKE?',
                subtitle: [
                  'High jump height relative to body weight.',
                  'High peak and mean concentric forces.',
                  'High early impulse (first 100 ms).',
                  'Effective countermovement strategy (deep enough, not too deep).'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: CMJ metrics reveal how much force you can produce, how quickly you can produce it, and how effectively you use the stretch-shortening cycle. Use them to build power, improve performance and reduce injury risk on the tennis court.'
          },
          {
            id: 'rht-metrics',
            title: 'Repeated Hop (RHT)',
            description: 'Reactive strength and ankle stiffness metrics.',
            procedure: [
              'RSI (Reactive Strength Index): Jump Height / Contact Time.',
              'Leg Stiffness (kN/m): Calculated ratio of peak force to leg displacement.',
              'Contact Time: Duration of the foot on the plate (aiming for <200ms).'
            ],
            scoring: 'Focus on high RSI values; lower contact times indicate better ankle stiffness and reactive capacity.'
          },
          {
            id: 'dj-metrics',
            title: 'Drop Jump (DJ)',
            description: 'Fast stretch-shortening cycle efficiency.',
            procedure: [
              'RSI: Calculated as flight time divided by contact time.',
              'Contact Time: Immediate reaction off the ground.',
              'Vertical Stiffness: Resistance to deformation during the landing phase.'
            ],
            scoring: 'Efficient athletes exhibit high RSI with very low contact times.'
          },
          {
            id: 'imtp-metrics',
            title: 'Isometric Mid-Thigh Pull (IMTP)',
            description: 'The IMTP assesses whole-body strength capacity and how quickly force can be produced. These metrics help us understand strengths, weaknesses, and training priorities for tennis.',
            procedure: [
              {
                title: 'MAX VERTICAL PEAK FORCE / BW (RELATIVE)',
                subtitle: [
                  'WHAT IT MEANS: The highest vertical force produced during the pull, relative to body weight. How much force you can produce for your size.',
                  'WHY IT MATTERS: Supports acceleration, deceleration and change of direction. Higher relative strength = more powerful movements on court. Key indicator of overall strength capacity.',
                  'STRENGTH ATTRIBUTE: Relative Strength',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK VERTICAL FORCE (N) (ABSOLUTE)',
                subtitle: [
                  'WHAT IT MEANS: The highest vertical force produced during the pull, measured in Newtons (N). The total amount of force you can produce.',
                  'WHY IT MATTERS: Reflects overall strength capacity. Important for force production in groundstrokes, serves and recovery. Useful for tracking development over time.',
                  'STRENGTH ATTRIBUTE: Strength Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'START TIME TO 80% NET PEAK FORCE (S)',
                subtitle: [
                  'WHAT IT MEANS: The time it takes to reach 80% of your peak force from the start of the pull. How quickly you can get to near-max force.',
                  'WHY IT MATTERS: Represents rate of force development (RFD). Critical for quick reactions, first step, split step and explosive movements. Faster = better ability to react and accelerate.',
                  'STRENGTH ATTRIBUTE: Rapid Force Production (Ready & React)',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK VERTICAL FORCE ASYMMETRY (%)',
                subtitle: [
                  'WHAT IT MEANS: The difference in peak vertical force between left and right sides. Highlights strength differences between sides.',
                  'WHY IT MATTERS: Asymmetry can increase injury risk. Helps identify imbalances that may affect movement efficiency. Supports more targeted training and rehab.',
                  'STRENGTH ATTRIBUTE: Leg Vertical Force Asymmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'START TIME TO PEAK FORCE (S)',
                subtitle: [
                  'WHAT IT MEANS: The time it takes to reach your maximum force from the start of the pull. Total time to achieve peak force.',
                  'WHY IT MATTERS: Helps understand the full force development profile. Useful for profiling and long-term development tracking. Compare against 80% time to understand the \'last 20%\'.',
                  'STRENGTH ATTRIBUTE: Force Development Profile',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'IMTP IN TENNIS PERFORMANCE',
                subtitle: [
                  'More force = more power in groundstrokes and serves.',
                  'Faster force production = quicker reactions and first step advantage.',
                  'Better strength capacity = stronger acceleration and deceleration.',
                  'Balanced strength = lower injury risk and better movement efficiency.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: IMTP metrics reveal your strength engine. Combine strength (how much) with speed (how fast) to perform at your best on court.'
          },
          {
            id: 'belt-metrics',
            title: 'Isometric Belt Squat',
            description: 'Lower-body specific maximal strength drive.',
            procedure: [
              'Peak Force: Total vertical force drive against the belt.',
              'Relative Peak Force: Performance normalized to body weight.',
              'Force Symmetry: Comparison of drive between Left and Right plates.'
            ],
            scoring: 'High relative peak force is a primary indicator of lower-body triple extension strength.'
          },
          {
            id: 'ankle-push-metrics',
            title: 'Ankle Push',
            description: 'Isolated plantarflexor strength metrics.',
            procedure: [
              'Peak Force: Maximum vertical effort from the calf complex.',
              'Left vs Right Symmetry: Percentage difference in peak force between sides (aiming for <10% imbalance).',
              'RFD: Ability to produce force rapidly to protect the ankle during landing.'
            ],
            scoring: 'Critical for assessing return-to-play readiness and ankle injury risk profiling.'
          }
        ]
      },
      {
        id: 'forceframe-metrics',
        label: 'ForceFrame',
        subTabs: [
          {
            id: 'forceframe-metrics-overview',
            title: 'ForceFrame Metrics Interpretation',
            description: 'Understanding key metrics from ForceFrame analysis.',
            procedure: [
              'Analyzing Maximal Strength (N).',
              'Assessing Symmetry and Imbalance ratios.',
              'Tracking Strength-to-Weight ratios.'
            ],
            scoring: 'Refer to specific symmetry guidelines for each test.'
          },
          {
            id: 'hip-add-abd-metrics',
            title: 'Hip Add/Abd',
            description: 'Groin and glute strength/symmetry interpretation.',
            procedure: [
              'Peak Force (Adduction): Strength of the groin complex.',
              'Peak Force (Abduction): Strength of the gluteal/lateral complex.',
              'Add/Abd Ratio: Balance between the inner and outer hip musclulature.',
              'Imbalance (%): Difference between Left and Right peak forces.'
            ],
            scoring: 'Asymmetry over 15% or low Adduction strength are significant markers for groin injury risk.'
          },
          {
            id: 'hip-flexion-metrics',
            title: 'Hip Flexion',
            description: 'Psoas and rectus femoris strength interpretation.',
            procedure: [
              'Peak Force (N): Absolute maximal hip flexion strength.',
              'Relative Peak Force (N/kg): Normalized to body mass.',
              'Left vs Right Asymmetry (%): Balance between legs.'
            ],
            scoring: 'Strong, symmetrical hip flexors are vital for explosive court movement and deceleration.'
          },
          {
            id: 'hip-extension-metrics',
            title: 'Hip Extension',
            description: 'Posterior chain (hamstring/glute) strength interpretation.',
            procedure: [
              'Peak Force (N): Absolute maximal hip extension strength.',
              'Relative Peak Force (N/kg): Strength relative to mass.',
              'Imbalance (%): Comparison between the left and right posterior chains.'
            ],
            scoring: 'Hip extension strength is critical for protecting the hamstrings during sprinting and turns.'
          },
          {
            id: 'shoulder-rot-metrics',
            title: 'Shoulder IR/ER',
            description: 'Rotator cuff strength and serving arm symmetry.',
            procedure: [
              'Peak Force (Internal Rotation): Power production in the serve.',
              'Peak Force (External Rotation): Deceleration/braking capacity.',
              'ER:IR Ratio: The balance between internal and external strength (aiming for 60-75%).',
              'Total Force: Sum of IR and ER for overall cuff health.'
            ],
            scoring: 'Imbalances or low ratios on the serving arm can increase the risk of over-use shoulder injuries.'
          }
        ]
      },
      {
        id: 'field-metrics',
        label: 'Field Tests',
        subTabs: [
          {
            id: 'field-metrics-overview',
            title: 'Field Tests Metrics Interpretation',
            description: 'Understanding outcomes from Speed, COD, and Aerobic field tests.',
            procedure: [
              'Interpreting 5m and 10m split times for acceleration.',
              'Analyzing COD deficit and symmetry.',
              'Understanding Yo-Yo distance and estimated VO2Max.'
            ],
            scoring: 'Refer to performance benchmarks for each age group.'
          },
          {
            id: 'speed-accel-metrics',
            title: 'Speed & Accel',
            description: 'Explosive acceleration interpretation.',
            procedure: [
              '0-5m Split: Initial explosive drive and "first step" quickness.',
              '0-10m Time: Overall acceleration performance.',
              'Split Comparison: Velocity maintenance between 5m and 10m marks.'
            ],
            scoring: 'Lower times indicate better acceleration; focus on the 0-5m split for court-specific quickness.'
          },
          {
            id: 'cod-metrics',
            title: '10-0-5m COD',
            description: 'Braking and re-acceleration interpretation.',
            procedure: [
              'Total Time: The full duration of the out-and-back sprint.',
              'COD Deficit: Total time minus linear speed time; isolates the "turning" cost.',
              'Left vs Right Symmetry: Efficiency comparison between turning directions.'
            ],
            scoring: 'Higher symmetry and lower COD deficit values indicate more efficient court movement.'
          },
          {
            id: 'yoyo-metrics',
            title: 'Yo-yo Level 1',
            description: 'Aerobic capacity and intermittent performance.',
            procedure: [
              'Final Level: The highest stage successfully completed.',
              'Total Distance (m): Cumulative distance covered.',
              'Estimated VO2Max: Calculated aerobic power based on stage reached.'
            ],
            scoring: 'Higher stages indicate better high-intensity endurance and recovery capacity.'
          },
          {
            id: 'vertec-metrics',
            title: 'Vertical Jump',
            description: 'Field-based explosive power interpretation.',
            procedure: [
              'Jump Height (cm): Final reach height minus standing reach height.',
              'Technical Consistency: Ensuring the same arm-swing and landing technique across trials.'
            ],
            scoring: 'Standardized measure of lower-body vertical power without force plate technology.'
          }
        ]
      }
    ]
  }
];
