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
            description: 'This guide has been developed to support the interpretation of physical performance testing within a high-performance tennis environment.',
            procedure: [
              {
                title: 'THE ASSESSMENT BATTERY',
                subtitle: [
                  'WHAT IT MEANS: The assessment battery includes the Isometric Mid-Thigh Pull (IMTP), Squat Jump (SJ), Countermovement Jump (CMJ), Drop Jump (DJ) and Hop Test (12/5).',
                  'WHY IT MATTERS: Collectively, these assessments provide insight into an athlete\'s strength, power, reactive strength, force production, movement efficiency and asymmetry profile.',
                  'STRENGTH ATTRIBUTE: Comprehensive Profiling',
                  'PRIORITY: BATTERY'
                ]
              },
              {
                title: 'TRANSLATING DATA TO TRAINING',
                subtitle: [
                  'WHAT IT MEANS: The purpose of this guide is not simply to explain testing outcomes.',
                  'WHY IT MATTERS: It assists coaches, strength and conditioning practitioners and sports scientists in translating assessment data into meaningful, high-impact training interventions.',
                  'STRENGTH ATTRIBUTE: Training Translation',
                  'PRIORITY: MISSION'
                ]
              },
              {
                title: 'HOLISTIC ATHLETE UNDERSTANDING',
                subtitle: [
                  'WHAT IT MEANS: Each testing metric should be viewed as a piece of information that contributes to a broader understanding of the athlete.',
                  'WHY IT MATTERS: When interpreted appropriately, these results can help identify physical strengths, highlight performance limitations, guide programming priorities, support return-to-play decision making and monitor athlete development over time.',
                  'STRENGTH ATTRIBUTE: Decision Support',
                  'PRIORITY: HOLISTIC'
                ]
              },
              {
                title: 'WHAT DOES A HIGH-VALUE ASSESSMENT PROGRAM DO?',
                subtitle: [
                  'Helps identify core physical strengths.',
                  'Highlights specific performance limitations.',
                  'Guides direct programmatic/training priorities.',
                  'Supports return-to-play decision making.',
                  'Monitors relative athlete development over time.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Ultimately, the value of testing lies not in the data collected, but in the quality of the decisions that follow.'
          },
          {
            id: 'sj-metrics',
            title: 'Squat Jump (SJ)',
            description: 'The SJ assesses lower-body explosive force production from a static start without a countermovement. It isolates the ability to generate power without elastic contribution, highlighting concentric strength and intent.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/SJ.jpg', '/TA-Testing-Protocols/SJ_trace.jpg'],
            procedure: [
              {
                title: 'JUMP HEIGHT (IMPULSE MOM) (SJ)',
                subtitle: [
                  'WHAT IT MEANS: The vertical height achieved during the jump, calculated from impulse. Higher jump height indicates greater lower-body power.',
                  'WHY IT MATTERS: Key indicator of explosive power for jumping, serving and court movements. Supports acceleration, deceleration and change of direction. Higher jump = more potential to generate force on court.',
                  'STRENGTH ATTRIBUTE: Relative Strength (Lower Body Power)',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'TAKE-OFF PEAK FORCE (N) OR (N/kg)',
                subtitle: [
                  'WHAT IT MEANS: The highest force produced during the entire concentric phase. Represents the actual force produced during the concentric phase.',
                  'WHY IT MATTERS: Reflects maximal force production capability. Important for first-step acceleration and explosive movements. Indicator of strength potential.',
                  'STRENGTH ATTRIBUTE: Strength Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'CON IMPULSE @ 100 MS (N•s)',
                subtitle: [
                  'WHAT IT MEANS: The impulse generated in the first 100 milliseconds of the concentric phase. Indicates the ability to produce force rapidly in the first 100 ms.',
                  'WHY IT MATTERS: Reflects the ability to produce force quickly off the ground. Critical for first-step explosiveness and quick reactions. Higher early impulse = better rate of force development (RFD).',
                  'STRENGTH ATTRIBUTE: Rapid Force Production (Ready & React)',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'MEAN CONCENTRIC FORCE (N) OR (N/kg)',
                subtitle: [
                  'WHAT IT MEANS: The average force produced throughout the entire concentric phase. Indicates ability to sustain force production.',
                  'WHY IT MATTERS: Supports assessment of overall force production efficiency. Important for longer ground contact actions and tracking strength improvements.',
                  'STRENGTH ATTRIBUTE: Strength Capacity (Sustained)',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'TAKE-OFF PEAK FORCE ASYMMETRY (%)',
                subtitle: [
                  'WHAT IT MEANS: Difference in peak take-off force between left and right sides. Highlights strength imbalances between sides.',
                  'WHY IT MATTERS: Asymmetries can increase injury risk. Helps identify limitations in unilateral performance. Supports more targeted training and rehab.',
                  'STRENGTH ATTRIBUTE: Leg Strength Symmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'PEAK LANDING FORCE (N) OR (N/kg)',
                subtitle: [
                  'WHAT IT MEANS: The highest force recorded upon landing after the jump. Reflects the ability to absorb and control landing forces.',
                  'WHY IT MATTERS: Indicates lower-body strength and landing mechanics. Higher values = better ability to absorb force in landing. Important for injury prevention and change of direction.',
                  'STRENGTH ATTRIBUTE: Landing Strength & Impact Control',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'ECCENTRIC DURATION (S)',
                subtitle: [
                  'WHAT IT MEANS: The time taken during the eccentric (downward) phase prior to take-off. Indicates movement speed and control strategy.',
                  'WHY IT MATTERS: Shorter duration = faster stretch-shortening cycle. Useful for understanding strategy and intent. Can impact RFD and jump performance.',
                  'STRENGTH ATTRIBUTE: Movement Speed & Control',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'EXPLOSIVE STIFFNESS (N/m)',
                subtitle: [
                  'WHAT IT MEANS: Ratio of force to displacement. Reflects the capacity to store and release elastic energy.',
                  'WHY IT MATTERS: Reflects explosive power relative to body mass. Useful for comparisons across athletes. Important for speed and quickness demands.',
                  'STRENGTH ATTRIBUTE: Reactive Strength & Stiffness',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET SJ RESULTS',
                subtitle: [
                  'HIGH JUMP HEIGHT + HIGH PEAK FORCE: Strong overall concentric strength and power.',
                  'HIGH EARLY IMPULSE @ 100 MS: Excellent rate of force development and first-step explosiveness.',
                  'LOW ASYMMETRY (%): Balanced strength between legs and lower injury risk.',
                  'HIGH PEAK LANDING FORCE: Greater strength and ability to absorb impact forces.',
                  'SHORTER ECCENTRIC DURATION: Faster stretch-shortening cycle and improved movement intent.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'SJ IN TENNIS PERFORMANCE',
                subtitle: [
                  'Stronger first-step speed and acceleration.',
                  'More explosive jumps for serves & overheads.',
                  'Better change of direction and court coverage.',
                  'Improved landing control and movement resilience.'
                ]
              },
              {
                title: 'WHAT DOES A "GOOD" SJ LOOK LIKE?',
                subtitle: [
                  'High jump height relative to body weight.',
                  'High peak force and early impulse @ 100 ms.',
                  'Low left-right asymmetry.',
                  'High landing strength and control.',
                  'Fast eccentric duration.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: The SJ metrics reveal true concentric strength and intent from a static start. Use these metrics to build strength, improve explosiveness, and reduce injury risk on the tennis court.'
          },
          {
            id: 'cmj-metrics',
            title: 'Countermovement Jump (CMJ)',
            description: 'The CMJ assesses lower-body power and how effectively force can be produced during a rapid stretch-shortening cycle. These metrics help us understand explosive performance, strengths, and training priorities for tennis.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/CMJ.jpg', '/TA-Testing-Protocols/CMJ_trace.jpg'],
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
                  'WHAT IT MEANS: The highest force produced during the upward (concentric) phase of the jump. The greater the force, the more powerful the athlete can be.',
                  'WHY IT MATTERS: Reflects maximal force production capability. Important for groundstrokes, serves and recovery. Useful for monitoring strength development over time.',
                  'STRENGTH ATTRIBUTE: Strength Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'CON IMPULSE @ 100 MS (N•s)',
                subtitle: [
                  'WHAT IT MEANS: The impulse generated in the first 100 milliseconds of the concentric phase. Represents ability to produce force rapidly.',
                  'WHY IT MATTERS: Critical for explosive actions like split step, first step and quick reactions. Higher early impulse = better rate of force development (FRD).',
                  'STRENGTH ATTRIBUTE: Rapid Force Production (Ready & React)',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'ECCENTRIC PEAK VELOCITY (m/s)',
                subtitle: [
                  'WHAT IT MEANS: The highest velocity reached during the downward (eccentric) phase of the jump. Higher velocity highlights greater ability to load quickly and use the stretch-shortening cycle effectively.',
                  'WHY IT MATTERS: Reflects ability to absorb force quickly and transition into powerful concentric action. Important for efficient use of the stretch-shortening cycle. Linked to better jump height and movement performance.',
                  'STRENGTH ATTRIBUTE: Reactive Strength & Elasticity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'MEAN CONCENTRIC FORCE (N) OR (N/kg)',
                subtitle: [
                  'WHAT IT MEANS: The average force produced throughout the entire concentric phase. Indicates the ability to sustain force production through the jump.',
                  'WHY IT MATTERS: Supports assessment of overall stretch-shortening efficiency. Important for longer ground contact actions and repeated efforts. Tracks strength improvements.',
                  'STRENGTH ATTRIBUTE: Strength Capacity (Sustained)',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'PEAK LANDING FORCE (N) OR (N/kg)',
                subtitle: [
                  'WHAT IT MEANS: The highest force recorded upon landing after the jump. Reflects the ability to absorb and control landing forces.',
                  'WHY IT MATTERS: Indicates lower-body strength and landing mechanics. Higher values = better ability to absorb force in landing. Important for injury prevention and change of direction.',
                  'STRENGTH ATTRIBUTE: Landing Strength & Impact Control',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'ECCENTRIC PEAK FORCE (N) OR (N/kg)',
                subtitle: [
                  'WHAT IT MEANS: The highest force produced during the downward (eccentric) phase. Reflects ability to absorb and control force.',
                  'WHY IT MATTERS: Indicates strength in deceleration and landing mechanics. Higher values = better ability to absorb force in decel phase. Important for injury prevention and change of direction.',
                  'STRENGTH ATTRIBUTE: Eccentric Strength & Deceleration',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'PEAK POWER / BM (W/kg)',
                subtitle: [
                  'WHAT IT MEANS: Peak power output relative to body mass. Ability to produce power rapidly (relative to body mass).',
                  'WHY IT MATTERS: Reflects explosive power relative to body mass. Useful for comparisons across athletes. Important for speed and quickness demands.',
                  'STRENGTH ATTRIBUTE: Explosive Speed & Control',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'COUNTERMOVEMENT DEPTH (CM)',
                subtitle: [
                  'WHAT IT MEANS: The downward movement distance during the countermove before the upward phase. Shows how deep the athlete initiates their jump.',
                  'WHY IT MATTERS: Influences utilization of the stretch–shortening cycle. Dependent on athlete strategy, leg length and health. Useful for understanding movement strategies.',
                  'STRENGTH ATTRIBUTE: Movement Strategy & Mechanics',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'PEAK POWER / BM (W/kg) ',
                subtitle: [
                  'WHAT IT MEANS: Peak power output relative to body mass. Ability to produce power rapidly (relative to body mass).',
                  'WHY IT MATTERS: Reflects explosive power relative to body mass. Useful for comparisons across athletes. Important for speed.',
                  'STRENGTH ATTRIBUTE: Explosive Power (Relative)',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'ECCENTRIC DURATION (S)',
                subtitle: [
                  'WHAT IT MEANS: The time taken during the eccentric (downward) phase. Indicates movement speed and control strategy.',
                  'WHY IT MATTERS: Shorter duration = faster stretch-shortening cycle. Useful for understanding movement strategies. Can impact RFD and jump performance.',
                  'STRENGTH ATTRIBUTE: Movement Speed & Control',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET CMJ RESULTS',
                subtitle: [
                  'HIGH JUMP HEIGHT + HIGH PEAK FORCE: Strong overall power and strength.',
                  'HIGH EARLY IMPULSE @ 100 MS: Excellent rate of force development and reactive ability.',
                  'OPTIMAL CM DEPTH: Efficient use of the stretch-shortening cycle.',
                  'LOW MEAN FORCE OR IMPULSE: May indicate fatigue or insufficient force sustainability.',
                  'LOW ECCENTRIC PEAK FORCE: Monitor landing control and injury risk.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'CMJ IN TENNIS PERFORMANCE',
                subtitle: [
                  'More powerful serve and greater ball speed.',
                  'Faster first step and improved court coverage.',
                  'Better change of direction and explosive acceleration.',
                  'Higher jumps for overheads and defensive statistics.',
                  'Reduced injury risk and better movement efficiency.'
                ]
              },
              {
                title: 'WHAT DOES A "GOOD" CMJ LOOK LIKE?',
                subtitle: [
                  'High jump height relative to body weight.',
                  'High peak and mean forces.',
                  'High early impulse (first 100 ms).',
                  'Efficient countermovement strategy (deep enough, not too deep).',
                  'Strong landing control and deceleration.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: CMJ metrics reveal how much force you can produce, how quickly you can produce it, and how effectively you use the stretch-shortening cycle. Use them to build power, improve performance and reduce injury risk on the tennis court.'
          },
          {
            id: 'rht-metrics',
            title: 'Repeated Hop (RHT)',
            description: 'The Hop Test (12/5) assesses reactive strength, force production and landing control through repeated unilateral hops. These metrics help us understand lower-limb reactivity, stiffness, asymmetries and training priorities for tennis.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/DL_Hop.jpg', '/TA-Testing-Protocols/DL_hop_trace.jpg'],
            procedure: [
              {
                title: 'RSI (KPI) (REACTIVE STRENGTH INDEX)',
                subtitle: [
                  'WHAT IT MEANS: Ratio between jump height and time on ground. Higher RSI indicates better reactive strength and SSC efficiency.',
                  'WHY IT MATTERS: How effectively an athlete can utilise the stretch-shortening cycle. Better ability to produce force quickly and move laterally with control.',
                  'STRENGTH ATTRIBUTE: Reactive Ability & Lateral Agility',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'JUMP HEIGHT (FLIGHT TIME) (CM)',
                subtitle: [
                  'WHAT IT MEANS: The height achieved during the hop, calculated from flight time. Higher jump height indicates greater force output.',
                  'WHY IT MATTERS: Measures overall force production capacity. Indicates the athlete\'s ability to produce explosive vertical force.',
                  'STRENGTH ATTRIBUTE: Force Capacity (Vertical)',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'CONTACT TIME (S)',
                subtitle: [
                  'WHAT IT MEANS: The time spent in contact with the ground during each hop. Lower contact time reflects better reactivity and movement efficiency.',
                  'WHY IT MATTERS: Key indicator of landing control and reactive efficiency. Shorter contact time indicates better stiffness and efficiency.',
                  'STRENGTH ATTRIBUTE: Control Measure',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'ACTIVE STIFFNESS (KN/M)',
                subtitle: [
                  'WHAT IT MEANS: Indicator of joint stiffness and movement control. Higher active stiffness indicates better use of SSC for performance.',
                  'WHY IT MATTERS: Higher stiffness suggests better reactive strength qualities. Important for performance optimization.',
                  'STRENGTH ATTRIBUTE: Ability to Produce Force & Achieve Optimal Jump Height',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'ACTIVE STIFFNESS ASYMM %',
                subtitle: [
                  'WHAT IT MEANS: Rapid production - differences between left and right sides. Lower asymmetry improves performance and reduces injury risk.',
                  'WHY IT MATTERS: Asymmetry may highlight imbalance and increased injury risk. Tracks limb balance to guide training and reduce injury risk.',
                  'STRENGTH ATTRIBUTE: % Difference Between Limbs',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'MOVEMENT STRATEGY & MECHANICS',
                subtitle: [
                  'WHAT IT MEANS: Downward movement distance during the countermovement before take-off. Shows how deep the athlete uses the countermovement.',
                  'WHY IT MATTERS: Helps interpret how athletes load and use the SSC. Dependent on athlete strategy, leg length and health.',
                  'STRENGTH ATTRIBUTE: Movement Strategy & Mechanics',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'EXPLOSIVE POWER (RELATIVE)',
                subtitle: [
                  'WHAT IT MEANS: Peak power output relative to body mass. Ability to produce power rapidly (relative to body mass).',
                  'WHY IT MATTERS: Ability to produce power rapidly relative to body mass. Helps compare athletes of different sizes.',
                  'STRENGTH ATTRIBUTE: Explosive Power (Relative)',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'MOVEMENT SPEED & CONTROL',
                subtitle: [
                  'WHAT IT MEANS: The time taken during the eccentric (downward) phase. Indicates movement speed and control strategy.',
                  'WHY IT MATTERS: Helps understand speed and efficiency of the stretch-shortening cycle. Shorter duration = faster SSC. Useful for understanding strategies.',
                  'STRENGTH ATTRIBUTE: Movement Speed & Control',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET HOP TEST RESULTS',
                subtitle: [
                  'HIGH RSI: Better reactive strength and SSC efficiency.',
                  'HIGH JUMP HEIGHT: Greater force production in the vertical plane.',
                  'LOW CONTACT TIME: Better stiffness and movement efficiency.',
                  'HIGH ACTIVE STIFFNESS: Better use of elastic energy and higher jump performance.',
                  'LOW ASYMMETRY (%): Balanced function between limbs and lower injury risk.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'HOP TEST IN TENNIS PERFORMANCE',
                subtitle: [
                  'Better reactivity = faster first step and quicker court coverage.',
                  'Improved SSC = more explosive change of direction.',
                  'Higher jump performance = better serve and overheads.',
                  'Enhanced lateral control = improved defensive movement.'
                ]
              },
              {
                title: 'WHAT DOES A "GOOD" HOP TEST LOOK LIKE?',
                subtitle: [
                  'High RSI (reactive strength index).',
                  'High jump height with low contact time.',
                  'High active stiffness.',
                  'Low asymmetry between left and right.',
                  'Consistent improvement over time.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Hop test metrics reveal your reactive strength engine. Combine strength (how much) with speed (how fast) to perform at your best on court.'
          },
          {
            id: 'dj-metrics',
            title: 'Drop Jump (DJ)',
            description: 'The Drop Jump assesses reactive strength, force production and the ability to rapidly absorb and re-apply force after ground contact. These metrics help us understand explosive performance, stiffness, and training priorities for tennis.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Drop_jump.jpeg', '/TA-Testing-Protocols/Drop_jump_trace.jpeg'],
            procedure: [
              {
                title: 'RSI (KPI) (REACTIVE STRENGTH INDEX)',
                subtitle: [
                  'WHAT IT MEANS: Ratio between jump height and time on ground. Higher RSI indicates better reactive strength and SSC efficiency.',
                  'WHY IT MATTERS: Ability to rapidly re-use the stretch-shortening cycle for explosive actions. Better ability to produce force quickly.',
                  'STRENGTH ATTRIBUTE: Reactive Ability & Lateral Agility',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'JUMP HEIGHT (FLIGHT TIME) (CM)',
                subtitle: [
                  'WHAT IT MEANS: The height achieved during the hop, calculated from flight time. Higher jump height indicates greater force output.',
                  'WHY IT MATTERS: The athlete\'s ability to produce explosive vertical force. Measures overall force production capacity.',
                  'STRENGTH ATTRIBUTE: Force Capacity (Vertical)',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'CONTACT TIME (S)',
                subtitle: [
                  'WHAT IT MEANS: The time spent in contact with the ground during each hop. Lower contact time reflects better reactivity and movement efficiency.',
                  'WHY IT MATTERS: Lower contact time reflects better reactivity and movement efficiency. Shorter contact time indicates better stiffness and efficiency.',
                  'STRENGTH ATTRIBUTE: Control Measure',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK DRIVE-OFF FORCE ASYMMETRY',
                subtitle: [
                  'WHAT IT MEANS: Asymmetry in highest force value applied during contact time. Lower asymmetry indicates better force balance between limbs.',
                  'WHY IT MATTERS: Asymmetry may highlight imbalance and increased injury risk. Lower asymmetry = better force balance between limbs.',
                  'STRENGTH ATTRIBUTE: Asymmetry in Highest Force Value Applied During Contact Time',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'PEAK POWER / BM (W/KG)',
                subtitle: [
                  'WHAT IT MEANS: Efficiency of force and velocity (muscular power) in vertical plane relative to body weight. Higher values indicate greater explosive power output.',
                  'WHY IT MATTERS: Higher values indicate greater explosive power output. Important for explosive power assessment.',
                  'STRENGTH ATTRIBUTE: Ability to Produce Power Rapidly (Relative to BM)',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'PEAK FORCE @ TAKE-OFF',
                subtitle: [
                  'WHAT IT MEANS: Maximum force applied at the moment of take-off. Higher values indicate greater force application.',
                  'WHY IT MATTERS: Represents maximum force applied during take-off. Helps understand force application capacity in the concentric phase.',
                  'STRENGTH ATTRIBUTE: Ability to Produce Concentric Forces - Highest Value',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'MOVEMENT STRATEGY & MECHANICS',
                subtitle: [
                  'WHAT IT MEANS: Downward movement distance during the countermovement before take-off. Shows how deep the athlete uses the countermovement.',
                  'WHY IT MATTERS: Dependent on athlete strategy, leg length and health. Helps interpret how athletes load and use the SSC.',
                  'STRENGTH ATTRIBUTE: Movement Strategy & Mechanics',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'GROUND CONTACT TIME CONSISTENCY',
                subtitle: [
                  'WHAT IT MEANS: Variation in contact time across hops. Lower variation indicates better consistency.',
                  'WHY IT MATTERS: Consistent contact time reflects better control and repeatability. Helps assess movement control and fatigue management.',
                  'STRENGTH ATTRIBUTE: Movement Efficiency & Control',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET DROP JUMP RESULTS',
                subtitle: [
                  'HIGH RSI: Better reactive strength, faster ground contact and better stretch-shortening cycle efficiency.',
                  'HIGH JUMP HEIGHT: Greater force production in the vertical plane.',
                  'LOW CONTACT TIME: Better stiffness and control. More efficient movement.',
                  'LOW ASYMMETRY (%): Balanced force production between left and right legs. Lower injury risk.',
                  'HIGH PEAK POWER/BM: More explosive athlete relative to body mass.',
                  'HIGH TAKE-OFF FORCE: Greater maximal concentric force production.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'DROP JUMP IN TENNIS PERFORMANCE',
                subtitle: [
                  'Faster reactions and movement off the ground.',
                  'Better split-step efficiency and readiness.',
                  'Improved change of direction and agility.',
                  'More powerful jumps for serves and overheads.'
                ]
              },
              {
                title: 'WHAT DOES A "GOOD" DROP JUMP LOOK LIKE?',
                subtitle: [
                  'High RSI (reactive strength index).',
                  'High jump height with low contact time.',
                  'Low asymmetry between left and right.',
                  'High peak power relative to body mass.',
                  'High take-off force values.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Drop jump metrics reveal your reactive strength engine. Combine strength (how much) with speed (how fast) to perform at your best on court.'
          },
          {
            id: 'imtp-metrics',
            title: 'Isometric Mid-Thigh Pull (IMTP)',
            description: 'The IMTP assesses whole-body strength capacity and how quickly force can be produced. These metrics help us understand strengths, weaknesses, and training priorities for tennis.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/IMTP.jpg', '/TA-Testing-Protocols/IMTP_trace.jpg'],
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
                  'STRENGTH ATTRIBUTE: Rapid Force Production (RFD)',
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
                title: 'AVERAGE FORCE (N)',
                subtitle: [
                  'WHAT IT MEANS: The average force produced throughout the pull. Indicates total force sustainment.',
                  'WHY IT MATTERS: Supports overall strength endurance. Useful for longer-duration stability and force maintenance.',
                  'STRENGTH ATTRIBUTE: Strength Endurance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'IMPULSE (N•S)',
                subtitle: [
                  'WHAT IT MEANS: The total force produced over time during the pull. More impulse = greater total force output.',
                  'WHY IT MATTERS: Reflects total work capacity. Important for high force sustainment in long rallies and repeated efforts.',
                  'STRENGTH ATTRIBUTE: Work Capacity',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'RATE OF FORCE DEVELOPMENT (RFD) (N/S)',
                subtitle: [
                  'WHAT IT MEANS: The rate at which force is developed from the start of the pull. Higher value = faster force development.',
                  'WHY IT MATTERS: Key for explosive actions like serves, jumps and first steps. Helps differentiate athletes with similar strength levels.',
                  'STRENGTH ATTRIBUTE: Rate of Force Development RFD',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'FORCE TIME CURVE',
                subtitle: [
                  'WHAT IT MEANS: The shape of the force time curve during the pull. Shows force production strategy and efficiency.',
                  'WHY IT MATTERS: Provides insight into neuromuscular strategy. Helps tailor training for power vs. strength focus.',
                  'STRENGTH ATTRIBUTE: Force Production Strategy',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET IMTP RESULTS',
                subtitle: [
                  'HIGH PEAK FORCE / BW: Strong relative strength and better movement potential on court.',
                  'FAST START TO 80% NPF: Better explosive ability and reaction speed.',
                  'LOW ASYMMETRY (%): Balanced strength between legs and lower injury risk.',
                  'SHORT START TIME TO PEAK FORCE: Quicker to produce force = advantage in explosive actions.',
                  'LOWER AVERAGE FORCE / IMPULSE: May indicate fatigue or insufficient strength endurance.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
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
                title: 'WHAT DOES A "GOOD" IMTP LOOK LIKE?',
                subtitle: [
                  'High peak force relative to body weight.',
                  'High absolute peak force.',
                  'Fast time to 80% net peak force.',
                  'Low force asymmetry between legs.',
                  'Consistent improvement over time.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: IMTP metrics reveal your strength engine. Combine strength (how much) with speed (how fast) to perform at your best on court.'
          },
          {
            id: 'belt-metrics',
            title: 'Isometric Belt Squat',
            description: 'The Isometric Belt Squat assesses lower-body maximal strength drive without placing load through the spine or using the arms. By pulling directly from the pelvis, it isolates pure lower-body triple extension capability and removes the latency of upper-body/core transmission.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Belt.jpg', '/TA-Testing-Protocols/Belt_trace.jpg'],
            procedure: [
              {
                title: 'MAX VERTICAL PEAK FORCE / BW (RELATIVE) (BELT SQUAT)',
                subtitle: [
                  'WHAT IT MEANS: The highest vertical force produced during the leg drive, relative to body weight. By pulling directly from the hips via the belt, this completely removes the arm and upper torso connection, isolating raw lower-body capability.',
                  'WHY IT MATTERS: Directly measures explosive leg drive potential on court, such as pushing off for serves or driving into wide groundstrokes.',
                  'STRENGTH ATTRIBUTE: Relative Hip & Leg Strength',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK VERTICAL FORCE (N) (ABSOLUTE) (BELT SQUAT)',
                subtitle: [
                  'WHAT IT MEANS: The absolute peak vertical force generated by the legs and hips, with the belt load braced directly at the pelvis, removing upper body transfer or grip strength limitations.',
                  'WHY IT MATTERS: Reflects the total maximal leg force output available for explosive courts movements, serves, and rapid deceleration/change of direction.',
                  'STRENGTH ATTRIBUTE: Absolute Lower Body Force',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'START TIME TO 80% NET PEAK FORCE (S) (BELT SQUAT)',
                subtitle: [
                  'WHAT IT MEANS: The time taken to reach 80% of peak force in the belt squat drive. By bypassing arms and torso connection, it measures pure, rapid lower-extremity neuromuscular force development from a deep crouched position.',
                  'WHY IT MATTERS: Key for quick reaction off the split-step and instant first-step accelerations. Bypassing the arms ensures no lag in force tracking.',
                  'STRENGTH ATTRIBUTE: Rapid Pure Leg Force Production',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK VERTICAL FORCE ASYMMETRY (%) (BELT SQUAT)',
                subtitle: [
                  'WHAT IT MEANS: The difference in peak drive force between left and right legs. Belt tension at the hips unmasks true lower-limb structural imbalances without upper body compensations.',
                  'WHY IT MATTERS: Asymmetry can lead to uneven movement patterns and higher ACL or groin injury risk. Direct pelvis loading highlights pure limb imbalances for targeted rehab.',
                  'STRENGTH ATTRIBUTE: Pure Leg Drive Symmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'AVERAGE FORCE (N) (BELT SQUAT)',
                subtitle: [
                  'WHAT IT MEANS: The average force produced continuously during the belt push. Bypassing upper torso and grip fatigue allows direct measurement of leg muscular endurance.',
                  'WHY IT MATTERS: Vital for maintaining strong, recursive ground contact during extended rallies and baseline movement.',
                  'STRENGTH ATTRIBUTE: Leg Muscular Endurance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'IMPULSE (N•S) (BELT SQUAT)',
                subtitle: [
                  'WHAT IT MEANS: Total lower-body work performed over time during the belt squat drive. No loading on the arms and shoulders allows pure tracking of leg-drive work capacity.',
                  'WHY IT MATTERS: Reflected in high-stamina legs that can sustain explosive changes of direction during 3-setter matches.',
                  'STRENGTH ATTRIBUTE: Leg & Hip Work Capacity',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'RATE OF FORCE DEVELOPMENT (RFD) (N/S) (BELT SQUAT)',
                subtitle: [
                  'WHAT IT MEANS: The rate at which leg-extension force accelerates from the start of the squat motion, completely uncoupled from any torso lag.',
                  'WHY IT MATTERS: Critical for explosive power during lunging and diving steps on defensive returns.',
                  'STRENGTH ATTRIBUTE: Leg Drive RFD',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'FORCE TIME CURVE (BELT SQUAT)',
                subtitle: [
                  'WHAT IT MEANS: The graphical shape of the leg-extension force over time, highlighting pure lower-body motor recruitment efficiency.',
                  'WHY IT MATTERS: Helps coaches understand if a player relies on velocity or max strength to generate lower-body power.',
                  'STRENGTH ATTRIBUTE: Lower-Body Neuro Execution Profile',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET SQUAT RESULTS',
                subtitle: [
                  'HIGH PEAK FORCE / BW: Excellent relative lower-body strength and direct court drive.',
                  'FAST START TO 80% NPF: Elite lower-limb speed and reaction off the mark without torso delay.',
                  'LOW ASYMMETRY (%): Balanced hip/leg drive and minimized injury risk.',
                  'SHORT START TIME TO PEAK FORCE: Highly explosive concentric drive from a low ready stance.',
                  'LOWER AVERAGE FORCE / IMPULSE: May benefit from dedicated leg volume or strength endurance conditioning.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'BELT SQUAT IN TENNIS PERFORMANCE',
                subtitle: [
                  'Stronger leg extension drive = higher speed and baseline acceleration.',
                  'Direct vertical drive = more explosive jump height for serves.',
                  'Bypassed upper-limb transfer = efficient force application for sudden court stops.',
                  'Symmetric lower extremities = reduced ground contact delays and speed imbalances.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD SQUAT LOOK LIKE?',
                subtitle: [
                  'High relative peak force driven from hips.',
                  'High absolute vertical force.',
                  'Rapid time to 80% net force without upper body lag.',
                  'Symmetric bilateral leg force output.',
                  'Solid, consistent force generation profile.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Belt Squat metrics reveal raw lower-body drive. By removing upper torso and arm transfer issues, they isolate your baseline power engine on court.'
          },
          {
            id: 'ankle-push-metrics',
            title: 'Ankle Push',
            description: 'The Ankle Push assesses isolated ankle strength, plantarflexor, and dorsiflexor capability. By locking the knee and hips, it focuses exclusively on the ankle joint complex to evaluate ankle stiffness, reaction potential, and calf force output.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Ankle.jpg', '/TA-Testing-Protocols/Ankle_trace.jpg'],
            procedure: [
              {
                title: 'MAX VERTICAL PEAK FORCE / BW (RELATIVE) (ANKLE PUSH)',
                subtitle: [
                  'WHAT IT MEANS: The highest vertical force produced relative to body weight specifically through isolated plantarflexion or dorsiflexion movement.',
                  'WHY IT MATTERS: Critical because the ankle is the first link in the kinetic chain; higher relative ankle force translates to better ground force application and lateral push.',
                  'STRENGTH ATTRIBUTE: Relative Ankle Joint Strength',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK VERTICAL FORCE (N) (ABSOLUTE) (ANKLE PUSH)',
                subtitle: [
                  'WHAT IT MEANS: The absolute peak force measured in Newtons produced solely by the calf, Achilles, and dorsi/plantar flexion complex.',
                  'WHY IT MATTERS: Measures maximum structural capability of the ankle stabilizers. Essential for sustaining extreme forces during hard court slide-stops and deep split-steps.',
                  'STRENGTH ATTRIBUTE: Ankle Complex Absolute Force',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'START TIME TO 80% NET PEAK FORCE (S) (ANKLE PUSH)',
                subtitle: [
                  'WHAT IT MEANS: The time it takes for the ankle plantar/dorsiflexor complex to reach 80% of peak force, measuring the quickness of lower limb tendon stiffness.',
                  'WHY IT MATTERS: Vital for rapid court reactions and split-step reactivity. Faster recruitment at the ankle complex keeps the foot light and springy.',
                  'STRENGTH ATTRIBUTE: Ankle Reaction Speed & Stiffness',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK VERTICAL FORCE ASYMMETRY (%) (ANKLE PUSH)',
                subtitle: [
                  'WHAT IT MEANS: Difference in peak force between the left and right ankle complexes, highlighting specific imbalances in the calf, ankle stabilizers, and dorsiflexor complex.',
                  'WHY IT MATTERS: Essential for screening lateral ankle injury risk. Asymmetry in dorsi/plantar flexion is a strong predictor of calf strains or ankle rolling.',
                  'STRENGTH ATTRIBUTE: Ankle Strength Symmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'AVERAGE FORCE (N) (ANKLE PUSH)',
                subtitle: [
                  'WHAT IT MEANS: The average force sustained across the calf and ankle flexion effort, representing structural hold duration.',
                  'WHY IT MATTERS: Supports ankle endurance, keeping the ankle-foot complex rigid and responsive even late in the third set.',
                  'STRENGTH ATTRIBUTE: Ankle-Calf Muscular Endurance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'IMPULSE (N•S) (ANKLE PUSH)',
                subtitle: [
                  'WHAT IT MEANS: Total ankle-joint force output produced over time during the press, highlighting the dorsiflexion load transfer mechanics.',
                  'WHY IT MATTERS: Helps assess the joint and tendon\'s capacity to absorb repetitive landing impact without breaking down.',
                  'STRENGTH ATTRIBUTE: Ankle Complex Load Tolerance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'RATE OF FORCE DEVELOPMENT (RFD) (N/S) (ANKLE PUSH)',
                subtitle: [
                  'WHAT IT MEANS: The rate of force development focused on swift ankle plantarflexor or dorsiflexor recruitment.',
                  'WHY IT MATTERS: Directly affects split-step readiness and explosive ankle reflex when pushing off for wide balls.',
                  'STRENGTH ATTRIBUTE: Ankle RFD & Joint Stiffness',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'FORCE TIME CURVE (ANKLE PUSH)',
                subtitle: [
                  'WHAT IT MEANS: The force signature showing the dorsi/plantarflexer recruitment speeds and ankle complex recruitment patterns.',
                  'WHY IT MATTERS: Assists coaches in isolating whether a player\'s ankle instability is a strength issue or a neuromuscular recruitment speed issue.',
                  'STRENGTH ATTRIBUTE: Dorsi & Plantarflexion Activation Profile',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET ANKLE RESULTS',
                subtitle: [
                  'HIGH PEAK FORCE / BW: Strong, resilient ankle foundation and superior court push-off.',
                  'FAST START TO 80% NPF: Elite ankle reflex speed and Achilles tendon elasticity.',
                  'LOW ASYMMETRY (%): Symmetrical ankle support, indicating reduced lateral rollover risk.',
                  'SHORT START TIME TO PEAK FORCE: Immediate, snappy ankle joint stabilization.',
                  'LOWER AVERAGE FORCE / IMPULSE: May require specific calf raises or Achilles loading.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'ANKLE PUSH IN TENNIS PERFORMANCE',
                subtitle: [
                  'Symmetric calf/ankle drive = balanced court push and stride efficiency.',
                  'Improved ankle stiffness = faster recovery steps off split-step landings.',
                  'Resilient dorsi/plantar flexion = reduced fatigue and lateral rolled ankles on hard courts.',
                  'Optimized ankle RFD = rapid court directional velocity shifts.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD ANKLE VALUE LOOK LIKE?',
                subtitle: [
                  'High relative peak force driven from the ankle complex.',
                  'High absolute vertical force in dorsi/plantar flexion.',
                  'Rapid time to 80% force to react safely.',
                  'Perfect left-right ankle strength balance.',
                  'Fast, responsive force engagement curve.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Ankle Push metrics assess your primary contact stabilizers. Strengthening the plantar and dorsi flexion complex is essential to boost agility and prevent injuries on court.'
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
            description: 'The Hip Add/Abd test on the ForceFrame assesses bilateral maximal strength and symmetry for the adductors (groin) and abductors (glutes). These metrics help map groin injury risks, joint resilience during quick cuts, and lower-limb force distribution pathways.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/AbAd.jpg', '/TA-Testing-Protocols/AbAd_trace.jpg'],
            procedure: [
              {
                title: 'MAX PEAK FORCE / BW (RELATIVE) (HIP ADD/ABD)',
                subtitle: [
                  'WHAT IT MEANS: The highest squeeze or push force produced relative to body weight specifically for the adductor (inner) or abductor (outer) hip muscle groups.',
                  'WHY IT MATTERS: Vital for direct lateral agility and rapid changes of direction on court. Strong adductors transmit lateral forces efficiently and reduce pelvis instability.',
                  'STRENGTH ATTRIBUTE: Relative Hip Joint Strength',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK FORCE (N) (ABSOLUTE) (HIP ADD/ABD)',
                subtitle: [
                  'WHAT IT MEANS: The absolute peak isometric force measured in Newtons produced by the inner groin or outer glute muscles during peak exertion.',
                  'WHY IT MATTERS: Highlights raw structural force production limits of the hip stabilizers, which act as main shock absorbers during sharp slides and hard braking steps.',
                  'STRENGTH ATTRIBUTE: Hip Complex Absolute Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'START TIME TO 80% NET PEAK FORCE (S) (HIP ADD/ABD)',
                subtitle: [
                  'WHAT IT MEANS: The time required for hip adductors or abductors to reach 80% of peak force from the onset of activation.',
                  'WHY IT MATTERS: Determines reactive trunk and pelvis stabilization speed. Faster adductor firing acts as an immediate safety brake during sudden, wide baseline reaches.',
                  'STRENGTH ATTRIBUTE: Rapid Dynamic Joint Stiffness',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK FORCE ASYMMETRY (%) (HIP ADD/ABD)',
                subtitle: [
                  'WHAT IT MEANS: Relative left-right strength difference in peak squeeze forces, exposing localized groin or glute imbalances.',
                  'WHY IT MATTERS: Crucial for injury screening. In tennis, an adductor asymmetry exceeding 10-15% is a significant predictor of unilateral athletic pubalgia (groin strain).',
                  'STRENGTH ATTRIBUTE: Lateral Hip Balance Symmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'AVERAGE FORCE (N) (HIP ADD/ABD)',
                subtitle: [
                  'WHAT IT MEANS: The average force sustained across the continuous isometric holding phase for the adductors or abductors.',
                  'WHY IT MATTERS: Represents core muscular hold endurance, keeping the hips stable against repetitive high-speed groundstrokes over long sets.',
                  'STRENGTH ATTRIBUTE: Hip Joint Muscular Endurance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'IMPULSE (N•S) (HIP ADD/ABD)',
                subtitle: [
                  'WHAT IT MEANS: Total cumulative force-over-time output performed during the hip adduction or abduction squeeze sequence.',
                  'WHY IT MATTERS: Reflects load accumulation safety, indicating the hip and pelvis complex\'s capacity to absorb repetitive deceleration mechanical stress.',
                  'STRENGTH ATTRIBUTE: Pelvis Dynamic Work Capacity',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'RATE OF FORCE DEVELOPMENT (RFD) (N/S) (HIP ADD/ABD)',
                subtitle: [
                  'WHAT IT MEANS: The speed at which adduction or abduction force is mounted, representing neural recruitment explosiveness.',
                  'WHY IT MATTERS: Essential for rapid court recovery steps. High RFD secures the hip instantly as weight is transferred over the leg.',
                  'STRENGTH ATTRIBUTE: Hip Joint RFD',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'FORCE TIME CURVE (HIP ADD/ABD)',
                subtitle: [
                  'WHAT IT MEANS: The visual representation of force build-up and decay, revealing dynamic coordination of the adductor/abductor groups.',
                  'WHY IT MATTERS: Allows coaches to distinguish between rapid reactive joint control and slow, grindy force production styles.',
                  'STRENGTH ATTRIBUTE: Neural Activation Strategy',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET HIP ADD/ABD RESULTS',
                subtitle: [
                  'HIGH relative PEAK FORCE: Elite pelvic stabilization and strong lateral power delivery.',
                  'FAST START TO 80% NPF: Quick dynamic muscular reactivity to prevent sliding and groin pulls.',
                  'LOW ASYMMETRY (%): Symmetrical muscular shield, minimizing groin and lower back risks.',
                  'OPTIMAL ADD:ABD RATIO (≈1.0): Synergistic balance between the inner and outer hip chains.',
                  'HIGH AVERAGE FORCE/IMPULSE: Exceptional hip core stamina during long baseline exchanges.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'HIP ADD/ABD IN TENNIS PERFORMANCE',
                subtitle: [
                  'Symmetric adductor drive = rapid court recovery and foot transitions.',
                  'Balanced outer abductors = solid deceleration platform and pelvic tilt correction.',
                  'Balanced anterior/posterior alignment = reduced loading on core and vertebrae.',
                  'High reactive joint stiffness = precise force transfer on extreme court slides.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD HIP PROFILE LOOK LIKE?',
                subtitle: [
                  'High relative peak adduction and abduction force (relative to BW).',
                  'Left-right side symmetry gap under 10%.',
                  'Rapid execution speed (fast 80% net force start).',
                  'Harmonious adduction-to-abduction ratio matching play demands.',
                  'A clean, highly stable force-time signature.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Hip Add/Abd metrics define your dynamic lateral shield. Maintaining balanced inner/outer hip strength is crucial for seamless slide-recovery and groin health.'
          },
          {
            id: 'hip-flexion-metrics',
            title: 'Hip Flexion',
            description: 'The Hip Flexion test on the ForceFrame isolates and measures the maximal strength of the anterior hip musculature (psoas major and rectus femoris). These metrics are primary indicators of stride frequency, sprint acceleration, and landing hip control.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Hipflexion.jpg', '/TA-Testing-Protocols/Hipflexion_trace.jpg'],
            procedure: [
              {
                title: 'MAX PEAK FORCE / BW (RELATIVE) (HIP FLEXION)',
                subtitle: [
                  'WHAT IT MEANS: The highest hip flexion force produced relative to body weight specifically by the anterior hip flexors (psoas, rectus femoris).',
                  'WHY IT MATTERS: High relative flexor strength allows rapid leg recovery during high-speed court sprints and quick recovery after deep knee extension steps.',
                  'STRENGTH ATTRIBUTE: Relative Anterior Hip Strength',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK FORCE (N) (ABSOLUTE) (HIP FLEXION)',
                subtitle: [
                  'WHAT IT MEANS: The absolute peak isometric force in Newtons produced as the anterior hip muscles pull upward against the ForceFrame pad.',
                  'WHY IT MATTERS: Establishes overall structural capacities of the hip flexors. Essential for sprinting drive, rapid deceleration, and lunging control.',
                  'STRENGTH ATTRIBUTE: Absolute Flexor Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'START TIME TO 80% NET PEAK FORCE (S) (HIP FLEXION)',
                subtitle: [
                  'WHAT IT MEANS: The time taken to reach 80% of maximal hip flexion force, reflecting the rate of motor unit activation in the anterior hip.',
                  'WHY IT MATTERS: Immediate hip flexor firing is crucial to initiate the swing phase of a sprint or react instantly from a wide-stretched split-step.',
                  'STRENGTH ATTRIBUTE: Rapid Flexor Firing Velocity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK FORCE ASYMMETRY (%) (HIP FLEXION)',
                subtitle: [
                  'WHAT IT MEANS: Left-right strength difference in peak hip flexion forces, identifying potential localized weakness or nerve conduction lag.',
                  'WHY IT MATTERS: Symmetrical flexor strength is key to maintaining structured, balanced sprint strides. Large asymmetries can lead to compensatory hip or lower back overloading.',
                  'STRENGTH ATTRIBUTE: Anterior Chain Symmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'AVERAGE FORCE (N) (HIP FLEXION)',
                subtitle: [
                  'WHAT IT MEANS: Average vertical force sustained during the isometric contraction of the psoas and rectus femoris complex.',
                  'WHY IT MATTERS: Indicates local endurance capacity, ensuring hip flexors do not get fat and lazy, causing stride degradation in later games.',
                  'STRENGTH ATTRIBUTE: Anterior Hip Muscular Endurance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'IMPULSE (N•S) (HIP FLEXION)',
                subtitle: [
                  'WHAT IT MEANS: Total cumulative force production over time during the hip flexion hold, indicating trunk-psoas holding work limits.',
                  'WHY IT MATTERS: Corresponds to stable, repetitive pelvic bracing strength against severe court-deceleration mechanical stresses.',
                  'STRENGTH ATTRIBUTE: Flexor Complex Work Capacity',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'RATE OF FORCE DEVELOPMENT (RFD) (N/S) (HIP FLEXION)',
                subtitle: [
                  'WHAT IT MEANS: The rate at which flexion force reaches maximum, indicating absolute neuromuscular explosiveness.',
                  'WHY IT MATTERS: Essential for high stride-rate movements and immediate change-of-direction leg transitions.',
                  'STRENGTH ATTRIBUTE: Hip Flexion RFD',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'FORCE TIME CURVE (HIP FLEXION)',
                subtitle: [
                  'WHAT IT MEANS: Graphical capture of the anterior hip contraction profile, charting neural recruitment speed and stability.',
                  'WHY IT MATTERS: Distinguishes quick explosive knee-lift potential from lagging recruitment times.',
                  'STRENGTH ATTRIBUTE: Anterior Hip Activation Signature',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET HIP FLEXION RESULTS',
                subtitle: [
                  'HIGH relative PEAK FORCE: Elite sprint acceleration potential and dynamic knee elevation.',
                  'FAST START TO 80% NPF: Instant stride transition speed and split-step leg recovery.',
                  'LOW ASYMMETRY (%): Equal athletic stride dynamics and lower compensatory lumber risks.',
                  'SHORT TIME TO PEAK FORCE: Highly explosive anterior chain recruitment speed.',
                  'LOWER AVERAGE FORCE/IMPULSE: May benefit from targeted psoas / rectus femoris stability work.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'HIP FLEXION IN TENNIS PERFORMANCE',
                subtitle: [
                  'Explosive knee drive = faster sprint velocity and court coverage transitions.',
                  'Active stabilizers = quicker split-step recovery on deep baseline steps.',
                  'High flexion strength = reliable deceleration control and dynamic hip hinges.',
                  'Symmetric anterior drive = fluid, efficient stride rotation with minimized fatigue.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD FLEXION PROFILE LOOK LIKE?',
                subtitle: [
                  'Superior peak force values scaled relative to body weight.',
                  'Highly symmetrical force outputs (L vs R discrepancy < 10%).',
                  'Snappy start times to 80% net force.',
                  'Solid, flat average force plateaus during the hold.',
                  'Smooth, rapid force development slope.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Hip Flexion metrics track the quick-drive engine of your stride. Developing snappy, balanced posterior-anterior psoas activation is key to maximizing speed and pelvic resilience.'
          },
          {
            id: 'hip-extension-metrics',
            title: 'Hip Extension',
            description: 'The Hip Extension test on the ForceFrame evaluates the peak force and asymmetry of the powerful posterior chain musculature (mainly gluteus maximus and hamstrings). It defines how effectively an athlete can push into the floor, accelerate horizontally, and maintain knee safety.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/HipExt.jpg', '/TA-Testing-Protocols/HipExt_trace.jpg'],
            procedure: [
              {
                title: 'MAX PEAK FORCE / BW (RELATIVE) (HIP EXTENSION)',
                subtitle: [
                  'WHAT IT MEANS: The maximum hip extension force produced relative to body weight specifically by the glutes and hamstrings.',
                  'WHY IT MATTERS: A key driver for horizontal propulsion on the court. Higher relative hip extension strength yields much more powerful accelerations and sprint drives.',
                  'STRENGTH ATTRIBUTE: Relative Posterior Chain Strength',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK FORCE (N) (ABSOLUTE) (HIP EXTENSION)',
                subtitle: [
                  'WHAT IT MEANS: The absolute peak isometric force in Newtons produced by glutes and hamstrings pressing downward against the ForceFrame rig.',
                  'WHY IT MATTERS: Highlights raw maximal power of the posterior kinetic chain. Critical for protecting hamstrings from straining during high-velocity accelerations and deep lunges.',
                  'STRENGTH ATTRIBUTE: Posterior Chain Absolute Force',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'START TIME TO 80% NET PEAK FORCE (S) (HIP EXTENSION)',
                subtitle: [
                  'WHAT IT MEANS: The time required for the posterior chain to reach 80% of peak force, measuring explosive back-chain recruitment.',
                  'WHY IT MATTERS: Vital for quick first-step jumps and immediate horizontal lunging thrusts. Ensures rapid motor unit activation when chasing down drop-shots.',
                  'STRENGTH ATTRIBUTE: Posterior Chain Firing Speed',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK FORCE ASYMMETRY (%) (HIP EXTENSION)',
                subtitle: [
                  'WHAT IT MEANS: Left-right strength discrepancy in peak hip extension, signifying unilateral gluteal or hamstring deficiencies.',
                  'WHY IT MATTERS: Critical for injury prevention. Hamstring and lower back injuries are often traced to significant posterior chain imbalances (greater than 10-15%).',
                  'STRENGTH ATTRIBUTE: Posterior Chain Balance Symmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'AVERAGE FORCE (N) (HIP EXTENSION)',
                subtitle: [
                  'WHAT IT MEANS: The average lower-hip extension force sustained continuously during the isometric contraction.',
                  'WHY IT MATTERS: Reflects posterior chain stamina, keeping the athlete capable of deep hip hinges and powerful hip extensions late in long, grueling games.',
                  'STRENGTH ATTRIBUTE: Posterior Chain Muscular Endurance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'IMPULSE (N•S) (HIP EXTENSION)',
                subtitle: [
                  'WHAT IT MEANS: Total cumulative lower-hip contraction force over time, reflecting posterior-chain mechanical work capacity.',
                  'WHY IT MATTERS: Essential for high structural load tolerance, shielding knee and pelvis joints against high mechanical landing stress.',
                  'STRENGTH ATTRIBUTE: Posterior Chain Hold Capacity',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'RATE OF FORCE DEVELOPMENT (RFD) (N/S) (HIP EXTENSION)',
                subtitle: [
                  'WHAT IT MEANS: The rate of force development during posterior chain engagement, measuring dynamic acceleration.',
                  'WHY IT MATTERS: Core factor in maximal stride efficiency and explosive jumps. Speed of posterior chain activation translates directly to court velocity.',
                  'STRENGTH ATTRIBUTE: Hip Extension RFD & Stiffness',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'FORCE TIME CURVE (HIP EXTENSION)',
                subtitle: [
                  'WHAT IT MEANS: Graph mapping posterior hip force generation, revealing neuromuscular firing strategies and activation timing.',
                  'WHY IT MATTERS: Helps clinicians identify lag-states or coordination patterns between glutes and hamstring recruitments.',
                  'STRENGTH ATTRIBUTE: Posterior Neuro-Activation Profile',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET HIP EXTENSION RESULTS',
                subtitle: [
                  'HIGH relative PEAK FORCE: Elite horizontal drive and high sprint potential.',
                  'FAST START TO 80% NPF: Quick dynamic posterior recruitment and explosive reactions.',
                  'LOW ASYMMETRY (%): Symmetric power and heavily protected hamstrings/knees.',
                  'SHORT TIMING TO PEAK FORCE: Highly responsive and functional back-chain stabilization.',
                  'LOWER AVERAGE FORCE/IMPULSE: May benefit from glute bridges, RDLs, or hamstring loading.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'HIP EXTENSION IN TENNIS PERFORMANCE',
                subtitle: [
                  'Strong posterior extension = high horizontal push-off velocity.',
                  'Fluid hamstring-glute firing = knee safety during explosive change of directions.',
                  'Symmetric lower-limb extension = balanced baseline agility and reduced fatigue.',
                  'Active stabilizers = reliable posture and core stability during serving leaps.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD EXTENSION PROFILE LOOK LIKE?',
                subtitle: [
                  'High peak force relative to body mass (N/kg matches target charts).',
                  'Left-right side symmetry gap strictly under 10%.',
                  'Rapid execution speeds (fast start to 80% net force).',
                  'Sustained average force throughout the extension profile.',
                  'Smooth, rapid force signature slope.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Hip Extension metrics reveal your posterior acceleration core. Strengthening and balancing the hamstring/glute complex is essential to unlock game speed and secure your knees on the court.'
          },
          {
            id: 'shoulder-rot-metrics',
            title: 'Shoulder IR/ER',
            description: 'The Shoulder IR/ER test on the ForceFrame measures the maximal isometric strength and balance of the rotator cuff muscles. It targets internal rotation (IR for serving power) and external rotation (ER for deceleration/injury prevention), which are crucial for dynamic shoulder complex health.',
            showImagePlaceholder: true,
            imagePath: ['/TA-Testing-Protocols/Shoulder.jpg', '/TA-Testing-Protocols/Shoulder_trace.jpg'],
            procedure: [
              {
                title: 'MAX PEAK FORCE / BW (RELATIVE) (SHOULDER IR/ER)',
                subtitle: [
                  'WHAT IT MEANS: The maximum voluntary shoulder rotation force relative to body weight specifically for internal (IR) or external (ER) rotation of the shoulder stabilizers.',
                  'WHY IT MATTERS: A robust rotator cuff provides active joint compression. High relative rotation strength supports the shoulder complex in absorbing dynamic racquet-ball impacts.',
                  'STRENGTH ATTRIBUTE: Relative Rotator Cuff Strength',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK FORCE (N) (ABSOLUTE) (SHOULDER IR/ER)',
                subtitle: [
                  'WHAT IT MEANS: The absolute peak isometric force in Newtons produced during maximal shoulder internal and external rotations against the ForceFrame pad.',
                  'WHY IT MATTERS: Highlights raw structural capacity of the rotator cuff. Internal rotation force drives serving speed, while external rotation provides essential braking capacity.',
                  'STRENGTH ATTRIBUTE: Dynamic Rotator Cuff Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'START TIME TO 80% NET PEAK FORCE (S) (SHOULDER IR/ER)',
                subtitle: [
                  'WHAT IT MEANS: The time taken to reach 80% of maximal rotational force, mirroring dynamic activation speeds of the shoulder stabilizers.',
                  'WHY IT MATTERS: Speed of stabilizer firing is crucial to lock the glenohumeral joint in place pre-impact. Fast activation preserves the joint from micro-instability and pinching.',
                  'STRENGTH ATTRIBUTE: Reactive Stabilizer Activation Speed',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'PEAK FORCE ASYMMETRY (%) (SHOULDER IR/ER)',
                subtitle: [
                  'WHAT IT MEANS: Left-right side strength imbalance and ER:IR ratio discrepancy. Compares the dominant serving arm to the non-dominant shoulder.',
                  'WHY IT MATTERS: Critical for overhead sports. Dominant arm IR is often highly developed, but if ER (the brakes) doesn\'t keep pace, or if side asymmetries exceed 10-15%, risk of cuff wear spikes.',
                  'STRENGTH ATTRIBUTE: Bilateral Joint Balance Symmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'AVERAGE FORCE (N) (SHOULDER IR/ER)',
                subtitle: [
                  'WHAT IT MEANS: The average rotation force sustained throughout the isometric hold phase of the cuff muscles.',
                  'WHY IT MATTERS: Evaluates regional muscle endurance. Essential for maintaining serving accuracy and shoulder stability across long, high-repetition serving games.',
                  'STRENGTH ATTRIBUTE: Rotator Cuff Muscle Endurance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'IMPULSE (N•S) (SHOULDER IR/ER)',
                subtitle: [
                  'WHAT IT MEANS: Total cumulative work done over the shoulder press intervals, indicating the capacity of the shoulder to tolerate structural energy loading.',
                  'WHY IT MATTERS: Supports overall racket acceleration endurance, shielding shoulder cartilage against high mechanical stress.',
                  'STRENGTH ATTRIBUTE: Shoulder Complex Work Capacity',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'RATE OF FORCE DEVELOPMENT (RFD) (N/S) (SHOULDER IR/ER)',
                subtitle: [
                  'WHAT IT MEANS: Rate of structural rotational force acceleration, reflecting dynamic activation speed of rotator cuff muscles.',
                  'WHY IT MATTERS: Directly determines sudden, reactive stabilization of the joint during off-center racket hits and overhead snap-downs.',
                  'STRENGTH ATTRIBUTE: Rotational RFD & Stiffness',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'FORCE TIME CURVE (SHOULDER IR/ER)',
                subtitle: [
                  'WHAT IT MEANS: The graphical representation of the rotator cuff force development curve, visualizing firing smoothness and timing.',
                  'WHY IT MATTERS: Helps coaches and physios identify stuttering neural engagement, pointing out joint pain or stabilizer weakness.',
                  'STRENGTH ATTRIBUTE: Rotator Cuff Activation Profile',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET SHOULDER RESULTS',
                subtitle: [
                  'HIGH relative PEAK IR FORCE: Elite baseline power and potentially faster serves.',
                  'FAST START TO 80% NPF: Snappy stabilizer engagement protecting the joint pre-impact.',
                  'BALANCED ER:IR RATIO (60-75%): Optimal ratio of accelerator to braking muscles, keeping the joint safe.',
                  'DOMINANT SIDE BILATERAL GUIDE: Normal dominant-side shift is common, but ER capacity must keep pace.',
                  'LOWER AVERAGE FORCE/IMPULSE: Indicates fatigue or need for specific rotator cuff isolation training.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  'Track over time to monitor development and training impact.',
                  'Compare to norms and previous results.',
                  'Use to guide training focus and individual needs.'
                ]
              },
              {
                title: 'SHOULDER ROTATION IN TENNIS PERFORMANCE',
                subtitle: [
                  'High internal rotation peak = powerful tennis serve and dominant swing velocity.',
                  'Robust external rotators = effective dynamic braking and joint deceleration.',
                  'Symmetric cuff strength = balanced impact absorption and high fatigue resistance.',
                  'Optimal reactive stabilizer speed = bulletproof shoulder joints and reduced impingement.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD SHOULDER PROFILE LOOK LIKE?',
                subtitle: [
                  'High peak IR and ER relative force based on athlete size.',
                  'Symmetrical ER:IR alignment (ideal ratio limits met).',
                  'Quick 80% target reach times for joint protection.',
                  'Stable, flat force-time trace during the holds.',
                  'A clean, steep force development slope.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Shoulder IR/ER metrics measure your upper-body stability and braking system. Developing strong, balanced external brakes is critical to support serve power and prevent overhead overuse injuries.'
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
              {
                title: '0-5M SPLIT TIME (s)',
                subtitle: [
                  'WHAT IT MEANS: The time taken to cover the first 5 meters from a stationary start, measured using high-precision dual-beam light gates.',
                  'WHY IT MATTERS: High indicator of "first-step" quickness and explosive horizontal drive, which are essential on the tennis court for getting to short drops or reacting off split-steps.',
                  'STRENGTH ATTRIBUTE: Initial Explosive Drive',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: '0-10M TOTAL TIME (s)',
                subtitle: [
                  'WHAT IT MEANS: The total time taken to run the full 10-meter distance, captured using wireless timing lights.',
                  'WHY IT MATTERS: Measures overall linear acceleration capacity. Essential for chasing down deep lobs and closing the distance to the net.',
                  'STRENGTH ATTRIBUTE: Linear Acceleration Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'ACCELERATION RATE (m/s²)',
                subtitle: [
                  'WHAT IT MEANS: The rate of change in velocity from 0 to 10 meters, calculated from split interval data.',
                  'WHY IT MATTERS: Tells coaches how efficiently the athlete is building velocity rather than just their raw times.',
                  'STRENGTH ATTRIBUTE: Rate of Velocity Development',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: '5-10M SPLIT TIME (s)',
                subtitle: [
                  'WHAT IT MEANS: The time spent covering the second 5-meter segment of the run.',
                  'WHY IT MATTERS: Highlights transition efficiency and speed maintenance as the athlete moves from initial drive to upright acceleration.',
                  'STRENGTH ATTRIBUTE: Mid-Phase Acceleration',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'STRIDE FREQUENCY / CADENCE (Hz)',
                subtitle: [
                  'WHAT IT MEANS: The estimated number of strides taken per second during the initial 10-meter burst.',
                  'WHY IT MATTERS: Helps analyze whether a player accelerates via rapid leg cycles (frequency) or long strides (force).',
                  'STRENGTH ATTRIBUTE: Neuromuscular Stride Velocity',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'SPRINT ENERGY PROFILE',
                subtitle: [
                  'WHAT IT MEANS: The mathematical relation between the first and second half of the 10m sprint.',
                  'WHY IT MATTERS: Identifies potential starting latency or front-loaded deceleration.',
                  'STRENGTH ATTRIBUTE: Linear Sprint Profile',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET SPRINT RESULTS',
                subtitle: [
                  '• FAST 0-5M SPLIT: Exceptional horizontal power and quick court entry.',
                  '• FAST 0-10M TIME: High overall acceleration capacity for deep baseline coverage.',
                  '• PROGRESSIVE VELOCITY: Positive velocity progression and continuous drive.',
                  '• EXCESSIVE START LATENCY: May indicate poor reaction mechanics or low initial quad power.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  '• Track over time to monitor speed development and off-season training blocks.',
                  '• Compare to tennis-specific age and gender norms to map progress.',
                  '• Use to tailor training focus (e.g. sled pushes for start drive vs plyometrics for stride length).'
                ]
              },
              {
                title: 'SPRINT PERFORMANCE IN TENNIS',
                subtitle: [
                  '• Faster first-step drive = dominant court positioning and earlier ball contact.',
                  '• Clean linear speed = efficient net transitions and recovery coverage.',
                  '• Horizontal hip drive = explosive weight transitions during wide hits.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD SPRINT PROFILE LOOK LIKE?',
                subtitle: [
                  'A high-performance sprint profile shows an immediate, steep velocity curve starting under the first touch step. There is minimal torso height disruption during the transition phase, with the hips actively driving forward beneath the shoulders to maintain a constant horizontal force pathway.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Speed & Accel metrics measure your horizontal power engine. Utilizing wireless light gates ensures precision tracking of your first-step response.'
          },
          {
            id: 'cod-metrics',
            title: '10-0-5m COD',
            description: 'Braking and re-acceleration interpretation.',
            procedure: [
              {
                title: 'TOTAL TIME LEFT (s)',
                subtitle: [
                  'WHAT IT MEANS: Total duration to sprint 10m, brake to a full stop (0m), and re-accelerate 5m to the finish gate, cutting off the left foot.',
                  'WHY IT MATTERS: Evaluates overall lateral decelerating and re-accelerating capacity when turning off the left leg.',
                  'STRENGTH ATTRIBUTE: Left-Foot COD Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'TOTAL TIME RIGHT (s)',
                subtitle: [
                  'WHAT IT MEANS: Total duration to sprint 10m, brake to a full stop (0m), and re-accelerate 5m to the finish gate, cutting off the right foot.',
                  'WHY IT MATTERS: Evaluates overall lateral decelerating and re-accelerating capacity when turning off the right leg.',
                  'STRENGTH ATTRIBUTE: Right-Foot COD Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'COD DEFICIT LEFT/RIGHT (s)',
                subtitle: [
                  'WHAT IT MEANS: The difference between the 10-0-5m COD time and the linear 15m sprint time. It isolates the actual "cost of turning" on each side.',
                  'WHY IT MATTERS: Isolates pure Change of Direction mechanics and braking efficiency from raw linear speed. Lower deficit means a highly agile mover.',
                  'STRENGTH ATTRIBUTE: Pure Turning Efficiency',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'COD ASYMMETRY (%)',
                subtitle: [
                  'WHAT IT MEANS: The percentage difference in turning speed and efficiency between left-foot turns and right-foot turns.',
                  'WHY IT MATTERS: Highlights movement imbalances on court. Exceeding 10% asymmetry points to unilateral knee/groin injury risk or turning weakness.',
                  'STRENGTH ATTRIBUTE: Lateral Agility Symmetry',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: '10M ENTRY SPEED (m/s)',
                subtitle: [
                  'WHAT IT MEANS: The average velocity during the initial 10-meter sprint prior to hitting the braking line.',
                  'WHY IT MATTERS: Measures the dynamic load the player must absorb and decelerate. An elite player enters with high speed and halts instantly.',
                  'STRENGTH ATTRIBUTE: Entry Braking Load Tolerance',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: '5M RE-ACCELERATION SPLIT (s)',
                subtitle: [
                  'WHAT IT MEANS: The isolated time taken to cover the final 5 meters after completing the sharp turn.',
                  'WHY IT MATTERS: Evaluates concentric power output and first-step acceleration out of a deep lateral crouch.',
                  'STRENGTH ATTRIBUTE: Post-Turn Concentric Drive',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'DECELERATION EFFICIENCY INDEX',
                subtitle: [
                  'WHAT IT MEANS: Ratio of entry velocity to total stop time, evaluating deceleration control.',
                  'WHY IT MATTERS: Helps analyze if a player is braking lazily across multiple steps or taking a single crisp deceleration plant.',
                  'STRENGTH ATTRIBUTE: Deceleration Braking Profile',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET COD RESULTS',
                subtitle: [
                  '• LOW COD DEFICIT: Highly efficient braking-to-acceleration mechanics, preserving momentum.',
                  '• EQUAL LEFT/RIGHT TIMES: Perfect lateral symmetry and balanced muscular loading.',
                  '• FAST RE-ACCELERATION TIME: Superb concentric leg drive from deep ankle and hip angles.',
                  '• HIGH ASYMMETRY (>10%): One-sided turning preference or dynamic joint instability.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  '• Track over time to test braking capability and returning-to-play benchmarks.',
                  '• Use symmetry scores to assign unilateral strength (single-leg squats, lunges).',
                  '• Adapt on-court agility drills targeting the weaker turning direction.'
                ]
              },
              {
                title: '10-0-5M COD IN TENNIS PERFORMANCE',
                subtitle: [
                  '• Crisp deceleration = rapid court recoveries and balanced returns under extreme pressure.',
                  '• Balanced left/right agility = unpredictable baseline defense and versatile footwork.',
                  '• Concentric re-acceleration = explosive split-step response out of corners.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD COD PROFILE LOOK LIKE?',
                subtitle: [
                  'A high-performing COD profile features a low-center-of-gravity entry and a single, explosive plant phase. The hips drop to absorb kinetic energy rapidly, followed immediately by strong concentric push-off through the foot arch to project the client back through the gate.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: 10-0-5m COD metrics isolate your braking and re-acceleration mechanics. Balancing left-right plant strength is the ultimate key to court coverage agility.'
          },
          {
            id: 'yoyo-metrics',
            title: 'Yo-yo Level 1',
            description: 'Aerobic capacity and intermittent performance.',
            procedure: [
              {
                title: 'YO-YO LEVEL REACHED',
                subtitle: [
                  'WHAT IT MEANS: The final completed speed level and shuttle stage reached before failing to match the audio cues twice.',
                  'WHY IT MATTERS: The primary benchmark of intermittent aerobic-anaerobic work capacity, predicting how long a player can sustain peak efforts.',
                  'STRENGTH ATTRIBUTE: Intermittent Aerobic Power',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'TOTAL DISTANCE COVERED (m)',
                subtitle: [
                  'WHAT IT MEANS: Cumulative number of successfully completed 2x20m shuttle runs, including recovery jogs.',
                  'WHY IT MATTERS: Directly tracks stamina capacity. Superior distance correlates with high fatigue resistance during multi-set matches.',
                  'STRENGTH ATTRIBUTE: Dynamic Stamina Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'ESTIMATED VO2MAX (ml/kg/min)',
                subtitle: [
                  'WHAT IT MEANS: Aerobic power calculation based on the total distance completed (VO2max = Distance x 0.0084 + 36.4).',
                  'WHY IT MATTERS: Establishes a physiological baseline for oxygen delivery. Essential for continuous recovery during low-intensity breaks.',
                  'STRENGTH ATTRIBUTE: Physical Aerobic Capacity',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'SUBMAX HEART RATE RECOVERY (%)',
                subtitle: [
                  'WHAT IT MEANS: The percentage drop in heart rate during the 60-second window immediately following the termination of the test.',
                  'WHY IT MATTERS: Measures autonomic nervous system efficiency. Faster recovery rates match quicker breathing and pulse normalization between points.',
                  'STRENGTH ATTRIBUTE: Autonomic Recovery Efficacy',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'FATIGUE THRESHOLD LEVEL',
                subtitle: [
                  'WHAT IT MEANS: The level at which execution mechanics begin to degrade or running gait stiffens.',
                  'WHY IT MATTERS: Identifies tactical breaking points where fatigue alters motor control, leading to errors.',
                  'STRENGTH ATTRIBUTE: Intermittent Motor Control',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'SHUTTLE VELOCITY SLOPE',
                subtitle: [
                  'WHAT IT MEANS: The progressive increase in acceleration and deceleration demand as the audio beeps accelerate.',
                  'WHY IT MATTERS: Helps analyze if an athlete struggles with the aerobic pacing or the sudden deceleration load of the shuttles.',
                  'STRENGTH ATTRIBUTE: Mechanical Intermittent Profile',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'AEROBIC RECOVERY METRIC',
                subtitle: [
                  'WHAT IT MEANS: Calculated energy expenditure efficiency during the 10-second active recovery periods.',
                  'WHY IT MATTERS: Evaluates the rate of PCr (phosphocreatine) resynthesis during short active breaks.',
                  'STRENGTH ATTRIBUTE: Anaerobic Glycolytic Clearance',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET YO-YO RESULTS',
                subtitle: [
                  '• REACHING STAGE 17+: Excellent tennis aerobic foundation, typical of junior elite profiles.',
                  '• REACHING STAGE 19+: Elite endurance, enabling continuous performance under intense match heat.',
                  '• STEEP HEART RATE RECOVERY: Active recovery systems are highly trained, restoring oxygen fast.',
                  '• EARLY TEST TERMINATION: Can signify poor aerobic capacity or joint fatigue under repeated stopping.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  '• Establish seasonal cardiorespiratory baselines before scheduling high-volume training.',
                  '• Use VO2max scores to prescribe specific interval workloads (e.g. 4x4 min at 90-95% HR).',
                  '• Re-test post-aerobic blocks to verify conditioning block adaptation.'
                ]
              },
              {
                title: 'YO-YO TEST IN TENNIS PERFORMANCE',
                subtitle: [
                  '• Elite tournament recovery = elite aerobic conditioning helps with recovery between matches day after day in a tournament week, as well as week after week of multiple match weeks in a tournament swing.',
                  '• Elite aerobic power = preserved decision-making and low unforced errors in third sets.',
                  '• Fast heart rate recovery = dynamic energy restoration between 25-second point boundaries.',
                  '• Intermittent efficiency = physical stamina to handle deep 3-hour clay-court matches.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD YO-YO RUN LOOK LIKE?',
                subtitle: [
                  'A model runner shows minimal extra movement during turning points, staying relaxed through the neck and shoulders. During active restoration gaps, pace is reduced immediately to a steady, rhythmic walk, supporting efficient respiratory recovery.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Yo-Yo IR1 metrics measure your cardiorespiratory stamina and recovery efficiency. High intermittent capacity guarantees you dominate long rallies without hitting the physical wall.'
          },
          {
            id: 'vertec-metrics',
            title: 'Vertical Jump',
            description: 'Field-based explosive power interpretation.',
            procedure: [
              {
                title: 'STANDING REACH HEIGHT (cm)',
                subtitle: [
                  'WHAT IT MEANS: The height touched on the Vertec vane panel while standing flat-footed with one arm extended fully upward.',
                  'WHY IT MATTERS: Establishes the static baseline reach height. Essential to calculate absolute vertical displacement.',
                  'STRENGTH ATTRIBUTE: Baseline Reach Height',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'MAX TOUCH HEIGHT (cm)',
                subtitle: [
                  'WHAT IT MEANS: The highest physical point achieved by swatting the Vertec vanes at the peak of a countermovement jump.',
                  'WHY IT MATTERS: Highlights raw reach capability in the air, directly reflecting potential overhead smash coverage and high serve contact points.',
                  'STRENGTH ATTRIBUTE: Absolute Vertical Reach',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'NET JUMP HEIGHT (cm)',
                subtitle: [
                  'WHAT IT MEANS: The basic jump height, calculated as Max Touch Height minus Standing Reach Height.',
                  'WHY IT MATTERS: A pure, standard field-based measure of lower-body explosive vertical power and triple extension displacement.',
                  'STRENGTH ATTRIBUTE: Relative Vertical Displacement',
                  'PRIORITY: PRIMARY'
                ]
              },
              {
                title: 'ESTIMATED PEAK POWER (W)',
                subtitle: [
                  'WHAT IT MEANS: Kinetic power generation calculated using jump height and body weight formula (e.g. Sayers Equation: Peak Power = 60.7 x Jump Height + 45.3 x Body Mass - 2055).',
                  'WHY IT MATTERS: Quantifies total explosive work. Vital because a heavier player jumping the same height as a lighter player generates more work.',
                  'STRENGTH ATTRIBUTE: Explosive Mechanical Power',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'ARM-SWING EFFICACY (cm)',
                subtitle: [
                  'WHAT IT MEANS: Comparison between a jump with arm-swing versus a jump with hands on hips (if tested).',
                  'WHY IT MATTERS: Measures the athlete’s capacity to coordinate upper-body momentum to assist lower-body triple extension force.',
                  'STRENGTH ATTRIBUTE: Kinetic Chain Coordination',
                  'PRIORITY: SECONDARY'
                ]
              },
              {
                title: 'JUMP HEIGHT PERCENTILE',
                subtitle: [
                  'WHAT IT MEANS: Athlete’s standing relative to age/gender athletic standards.',
                  'WHY IT MATTERS: Helps set context for whether explosive power is a competitive advantage or a baseline deficit.',
                  'STRENGTH ATTRIBUTE: Power Performance Ranking',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'FLIGHT TIME ESTIMATE (s)',
                subtitle: [
                  'WHAT IT MEANS: Estimated mathematical duration in the air based on vertical displacement.',
                  'WHY IT MATTERS: Helps correlate vertical field performance with laboratory force-plate metrics.',
                  'STRENGTH ATTRIBUTE: Aerial Displacement Dynamics',
                  'PRIORITY: EXPLORATORY'
                ]
              },
              {
                title: 'HOW TO INTERPRET JUMP RESULTS',
                subtitle: [
                  '• JUMP HEIGHT >50CM (FEMALE): Elite lower-body extension power and court verticality.',
                  '• JUMP HEIGHT >65CM (MALE): Elite lower-body extension power and court verticality.',
                  '• HIGH ESTIMATED PEAK POWER: Strong capacity to generate massive explosive ground force.',
                  '• LAGGING ARM-SWING GAIN: May point to poor timing or kinetic coordination between torso and hips.'
                ]
              },
              {
                title: 'HOW TO USE THESE METRICS',
                subtitle: [
                  '• Track vertical drive to program plyometric progressions (box jumps, depth drops).',
                  '• Compare absolute touch heights to serve release heights to optimize contact timing.',
                  '• Run as a quick, low-fatigue neuromuscular fatigue screening test.'
                ]
              },
              {
                title: 'VERTICAL JUMP IN TENNIS PERFORMANCE',
                subtitle: [
                  '• Explosive vertical power = elevated serve release and wider angles into the box.',
                  '• Supreme aerial reach = dominant overhead smash execution and defensive baseline lobs.',
                  '• High triple-extension force = powerful reactive split-steps off the ground.'
                ]
              },
              {
                title: 'WHAT DOES A GOOD JUMP LOOK LIKE?',
                subtitle: [
                  'The perfect Vertec jump starts with a brisk, violent countermovement and deep hip drop. The arms swing upward with massive force, pulling the entire kinetic chain into full triple extension at trigger, with the leading hand fully extended for a precise vane contact.'
                ]
              }
            ],
            scoring: 'KEY TAKEAWAY: Vertical Jump (Vertec) metrics measure your explosive lower-body triple extension. Bypassing complex plates, it provides a direct, field-ready gauge of vertical power and contact height.'
          }
        ]
      }
    ]
  }
];
