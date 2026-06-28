// =====================================================================
//  Design Studio Compass — CONTENT
//  This is the only file you edit to add or change examples.
//  The app code lives in index.html and reads the EXAMPLES list below.
// ---------------------------------------------------------------------
//  WHAT EACH TILE IS FOR
//  Every entry explains ONE specific deliverable or process the team
//  might need help making — not a whole-project summary. Title it by the
//  thing being made ("Massing diagrams that tell a story"), so a person
//  Finds what they need, Understands how it was made, then Makes it.
// ---------------------------------------------------------------------
//  GOLDEN RULES
//   - Every entry is wrapped in { } and separated by a comma.
//   - Text goes inside "double quotes". Keep the quotes and commas.
//   - To start a new paragraph inside narrative, write \n\n.
//   - If the page goes blank after an edit, you almost certainly
//     dropped a comma or a quote. Undo and try again.
// ---------------------------------------------------------------------
//  COPY THIS TEMPLATE for a new example (paste it inside the [ ] list):
//
//   {
//     id:"short-unique-slug",                       // no spaces
//     title:"The specific deliverable, plainly named",
//     // thumbnail:"https://...jpg",                // optional cover image
//     facets:{
//       project:"Project Name . City, ST",
//       phase:"Concept Development",                // must match a phase on the spine
//       sub_phase:"Ideation, visioning & analysis",
//       deliverable_type:"massing diagram",
//       process_type:"design charrette",
//       concept_tags:["engagement method"]          // used for search + related
//     },
//     narrative:"Quick context from the maker, in plain voice.\\n\\nWhy it was made this way and what it was for.",
//     steps:[                                        // a recipe + questions to ask while making it
//       "Do this. Ask yourself that.",
//       "Next step.",
//     ],
//     resources:[                                   // reusable templates / worked examples
//       {label:"Name of the template", link:"#"},   // link = Drive share URL when live
//     ],
//     source_links:[                                // the real asset on Drive
//       {label:"Name of the file", drive_url:"#"},  // drive_url = Drive share URL when live
//     ],
//     ask_me:"Who worked on it / who can help",     // shows as "Who to ask"
//   },
//
//  On the live site, link / drive_url are Google Drive share URLs
//  (https://drive.google.com/...). In this sandbox they can be local
//  file paths (file:///C:/Users/.../DSC%20Test%20Drive/...).
// =====================================================================

const EXAMPLES = [
  {
    id:"labwc-massing-story",
    title:"Massing diagrams that tell a story",
    thumbnail:"images/labwc-massing.jpg",
    facets:{project:"Los Angeles Black Worker Center · 5401 S Crenshaw Blvd, Los Angeles, CA", phase:"Concept Development",
      sub_phase:"Ideation, visioning & analysis",
      deliverable_type:"massing diagram", process_type:"design charrette",
      concept_tags:["engagement method","community/cultural research"]},
    narrative:"These are the three massing options we developed for the Black Worker Center — Sky Village, Core Legacy, and Welcome Quilt. They're early development diagrams, not finished buildings, and that's the point: the deliverable's job was to show our thinking, so the community could see how their own words turned into built form.\n\nEach option carries the same set of design-intent labels, and every label traces back to something we heard in engagement — \"Civic Space Activated by Local Economic Ecosystems\" came from the call for daily-needs retail; \"Staying Power\" came from belonging and resisting displacement. The massing tells a story because its inputs are visible on it: the program synthesis, the site adjacencies, and the engagement themes all explain why the mass sits where it does. That's the skill this entry is about — making a massing diagram that explains its own reasoning, plainly enough that a neighbor and a funder both follow it.",
    steps:[
      "Start from what you heard — distill the engagement into a short set of named themes. Ask: what does the community actually want this place to do?",
      "Synthesize the program. List every space, then ask which ones carry the themes and which are just square footage.",
      "Study site adjacencies before form: what has to be near what, what must meet the street, where does the light come from?",
      "Develop more than one option (we did three). Make each one answer the themes differently — not just look different.",
      "Label every massing move with its \"why.\" If a move doesn't trace back to a theme, the program, or the site, question whether it belongs.",
      "Say the story out loud: could a neighbor and a funder both explain why the mass is shaped this way? If not, simplify until they can.",
    ],
    resources:[
      {label:"How a 3-option massing set is built — worked example (LABWC, pp. 12–22)", link:"file:///C:/Users/tthompson/Desktop/DSC%20Test%20Drive/Project%20Assets/Los%20Angeles%20Black%20Worker%20Center/01%20Concept%20Development/2%20Ideation,%20visioning%20%26%20analysis/260415_LABWC_%20Feasibility%20Study%20Options.pdf"},
    ],
    source_links:[{label:"Preliminary Feasibility Studies — the 3 massing options (PDF)", drive_url:"file:///C:/Users/tthompson/Desktop/DSC%20Test%20Drive/Project%20Assets/Los%20Angeles%20Black%20Worker%20Center/01%20Concept%20Development/2%20Ideation,%20visioning%20%26%20analysis/260415_LABWC_%20Feasibility%20Study%20Options.pdf"}],
    ask_me:"Sara Samar",
  },

  /* ---- Method tiles: how-to entries with no case study yet. Steps are the
     recipe; real project examples can be attached later. No image required. ---- */
  {
    id:"technical-site-analysis",
    title:"Technical site analysis",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      deliverable_type:"site analysis", process_type:"coding & analysis",
      concept_tags:["feasibility/finance"]},
    narrative:"Before you design, understand what the site already is on paper. Technical site analysis reads the built and regulatory reality — zoning and overlays, surveys, civil and geotech reports, as-builts, easements, rights-of-way, and existing utilities.\n\nIt matters because these constraints quietly set the envelope of what's possible and affordable. Surfacing them early turns \"surprises\" into design drivers and keeps the concept honest about what the site, the code, and the infrastructure will actually allow.",
    steps:[
      "Pull the zoning — use, height, FAR, setbacks, parking, overlays. Ask: what does the code let us build before we ask for anything?",
      "Get a current survey and the as-builts. What's really there, and where are the property lines?",
      "Map easements, rights-of-way, and utility locations. What can't we build on, and where does service come from?",
      "Review civil, geotech, and environmental reports for soils, drainage, and hazards. What will cost money to overcome?",
      "Translate each constraint into a design driver or a question for the team — not a buried footnote.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
  {
    id:"environmental-site-analysis",
    title:"Environmental site analysis",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      deliverable_type:"site analysis", process_type:"site analysis",
      concept_tags:["community/cultural research"]},
    narrative:"Understand the land as a living system, apart from anything built. Environmental site analysis studies sun, wind, rain and water, air, vegetation, habitat, and the seasonal patterns of the place.\n\nIt matters because a concept that works with the climate and ecology is cheaper to run, healthier to occupy, and more rooted in its place. Reading these natural drivers early lets form, orientation, and landscape respond to them instead of fighting them.",
    steps:[
      "Chart sun paths and shadows across the seasons. Where does light want to be, and what overheats?",
      "Map prevailing winds and airflow. Can the building breathe naturally — where does it need shelter?",
      "Trace water: rainfall, drainage, flooding, and where stormwater wants to go.",
      "Inventory existing vegetation, soils, and habitat. What's worth keeping or restoring?",
      "Turn each natural pattern into an orientation, massing, or landscape move.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
  {
    id:"somatic-site-analysis",
    title:"Somatic site analysis",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      deliverable_type:"site analysis", process_type:"immersive site visit",
      concept_tags:["engagement method"]},
    narrative:"Understand the site through the body — by being there and paying attention. Somatic site analysis is the felt experience: what you see, hear, smell, and feel as you move through the place at different times of day.\n\nIt matters because drawings and data miss how a site actually lands on a person. Sensory and experiential mapping captures the qualities — comfort, exposure, noise, rhythm — that decide whether a space will feel right, and gives the concept a human measure.",
    steps:[
      "Spend unstructured time on site, more than once, at different times of day. What changes from morning to night?",
      "Map the senses: where is it loud, quiet, bright, dark, warm, exposed, sheltered?",
      "Walk the paths people actually take. Where do you slow down, speed up, feel watched, feel at ease?",
      "Note thresholds and edges — where one feeling becomes another.",
      "Carry the strongest felt qualities into the concept as things to protect or to fix.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
  {
    id:"cultural-community-site-analysis",
    title:"Cultural, community & historical analysis",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      deliverable_type:"site analysis", process_type:"community engagement",
      concept_tags:["community/cultural research","engagement method"]},
    narrative:"Understand the site through its people and its past. This analysis learns the community, client, and staff — their rituals, traditions, histories, and the assets already present — through deep research, listening sessions, and simply being present with people.\n\nIt matters because a site is never a blank slate; it carries meaning, memory, and existing strengths. Surfacing them keeps the concept accountable to the community and builds on what's already working instead of overwriting it.",
    steps:[
      "Research the history: who has been here, what happened, what's remembered — and by whom?",
      "Hold listening sessions with community, client, and staff. What do they want this place to do?",
      "Map existing assets — people, organizations, gathering spots, and traditions already at work.",
      "Learn the rituals and routines the space must hold. When and how do people actually use it?",
      "Carry one or two anchoring findings straight into the concept, and name who they came from.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
];
