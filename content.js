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
//     date:"2026-06-29",                            // YYYY-MM-DD — newest sort to the top of each phase
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
    date:"2026-06-27",
    title:"Massing diagrams that tell a story",
    thumbnail:"images/labwc-massing.jpg",
    facets:{project:"Los Angeles Black Worker Center · 5401 S Crenshaw Blvd, Los Angeles, CA", phase:"Concept Development",
      sub_phase:"Ideation, visioning & analysis",
      deliverable_type:"massing diagram",
      concept_tags:["engagement method","community/cultural research"]},
    keywords:["massing","massing study","massing options","volume","form","bulk","stacking","program","sky village","core legacy","welcome quilt","design driver"],
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
      {label:"SketchUp template", link:"#"},
      {label:"Illustrator template", link:"#"},
      {label:"Color palette", link:"#"},
      {label:"Graphic resources", link:"#"},
      {label:"Massing diagram slides template", link:"#"},
    ],
    source_links:[{label:"Preliminary Feasibility Studies — the 3 massing options (PDF)", drive_url:"file:///C:/Users/tthompson/Desktop/DSC%20Test%20Drive/Project%20Assets/Los%20Angeles%20Black%20Worker%20Center/01%20Concept%20Development/2%20Ideation,%20visioning%20%26%20analysis/260415_LABWC_%20Feasibility%20Study%20Options.pdf"}],
    // gallery: clickable image sequence on the detail page (caption per step)
    gallery:[
      {src:"images/labwc-massing-1-base.jpg", caption:"Base — the starting bar along transit"},
      {src:"images/labwc-massing-2-rise.jpg", caption:"Rise — building up density"},
      {src:"images/labwc-massing-3-shift.jpg", caption:"Shift — carving the central courtyard"},
      {src:"images/labwc-massing-4-housing.jpg", caption:"Housing drop — splitting into volumes"},
      {src:"images/labwc-massing-5-final.jpg", caption:"Final massing — opening the greenway"},
    ],
    ask_me:"Sara Samar",
  },

  /* ---- Method tiles: how-to entries with no case study yet. Steps are the
     recipe; real project examples can be attached later. No image required. ---- */
  {
    id:"technical-site-analysis",
    date:"2026-06-28",
    title:"Technical site analysis",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      deliverable_type:"site analysis", process_type:"coding & analysis",
      concept_tags:["feasibility/finance"]},
    keywords:["zoning","code","setback","FAR","easement","utilities","survey","as-built","right of way","entitlement","parking","geotech","civil","soils","constraints","overlay","title report"],
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
    date:"2026-06-28",
    title:"Environmental site analysis",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      deliverable_type:"site analysis", process_type:"site analysis",
      concept_tags:["community/cultural research"]},
    keywords:["sun study","solar","shadow study","sunlight","daylight","wind","airflow","microclimate","climate","rain","stormwater","drainage","flood","ecology","habitat","vegetation","shade","orientation","sustainability","passive design"],
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
    date:"2026-06-28",
    title:"Somatic site analysis",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      deliverable_type:"site analysis", process_type:"immersive site visit",
      concept_tags:["engagement method"]},
    keywords:["sensory mapping","senses","embodied","experience","walk the site","sound","noise","smell","light","comfort","atmosphere","wayfinding","phenomenology","observation"],
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
    date:"2026-06-28",
    title:"Cultural, community & historical analysis",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      deliverable_type:"site analysis", process_type:"community engagement",
      concept_tags:["community/cultural research","engagement method"]},
    keywords:["community engagement","listening session","asset mapping","history","historical","rituals","traditions","stakeholders","oral history","ethnography","participatory","neighborhood","equity"],
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
  {
    id:"collage-rendering",
    date:"2026-06-28",
    title:"Collage rendering",
    facets:{phase:"Concept Development", sub_phase:"Ideation, visioning & analysis",
      deliverable_type:"collage rendering", concept_tags:["community/cultural research"]},
    narrative:"A fast, evocative image that conveys atmosphere and intent by collaging real textures, people, and references over a loose base — not a polished photoreal render.\n\nIt earns its place early because it communicates feeling and values before the design is resolved, and it reads as a draft people feel free to push on.",
    steps:[
      "Gather reference imagery that carries the right feeling — light, people, materials, life.",
      "Set up a simple base: a sketch, a massing shot, or a site photo.",
      "Collage the references in; keep it loose and suggestive, not finished.",
      "Caption the key moves so the 'why' reads at a glance.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
  {
    id:"morpholio-hand-sketch",
    date:"2026-06-28",
    title:"Morpholio hand sketch",
    facets:{phase:"Concept Development", sub_phase:"Ideation, visioning & analysis",
      process_type:"hand sketching", concept_tags:["engagement method"]},
    narrative:"Sketching by hand — here in Morpholio Trace on an iPad — over plans, photos, or models to think quickly and keep ideas legible and human.\n\nThe roughness is the point: a hand sketch invites input in a way a clean drawing doesn't, so it's ideal for working live with the team or community.",
    steps:[
      "Drop a base image or plan into Trace as the bottom layer.",
      "Sketch the move fast and low-fidelity on a fresh layer.",
      "Try alternatives on new trace sheets rather than erasing.",
      "Annotate the intent, then export to share or trace over next round.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
  {
    id:"quick-dirty-model",
    date:"2026-06-28",
    title:"Quick & dirty model making",
    facets:{phase:"Concept Development", sub_phase:"Ideation, visioning & analysis",
      process_type:"model making", concept_tags:["feasibility/finance"]},
    narrative:"Rough study models made fast — chipboard, foam, or a loose digital mass — to test a three-dimensional idea. Speed over finish; the job is to see it and decide.\n\nA quick model answers questions a drawing can't (scale, light, fit) before anyone invests in resolving it.",
    steps:[
      "Pick the one question the model has to answer.",
      "Build it at low fidelity, fast — don't make it precious.",
      "Test against the question: scale, light, how it sits on the site.",
      "Photograph it for the record, then iterate or move on.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
  {
    id:"program-block-site-model",
    date:"2026-06-29",
    title:"Site designing with a physical program block model",
    thumbnail:"images/program-block.jpg",
    facets:{phase:"Concept Development", sub_phase:"Ideation, visioning & analysis",
      process_type:"model making", concept_tags:["engagement method","feasibility/finance"]},
    keywords:["block model","program blocks","stacking and blocking","massing study","site design","charrette","foam core","physical model","program","scale model","massing model"],
    narrative:"Building the program as a set of movable physical blocks and arranging them on a scaled site base, so the team can iterate on site and building organization together, in real time.\n\nWorking in physical blocks early breaks the pressure to produce refined drawings before a concept has been pressure-tested, and it resists the over-detailing a digital model invites. It lets many people shape the design at once — no bottleneck around the one person who can drive the software — and it makes three-dimensional ideas legible to teammates or community members who don't read plans and sections. Reach for it in the first design charrettes, once site analysis and early engagement are in hand and the team is forming themes, program needs, and a read of the site's constraints.",
    steps:[
      "Prep a base at a scale matched to the project and your blocks. A scaled aerial printout with basic labels works for flat sites; build a physical base model when terrain or site features won't read flat. Either way, build or 3D-print the surrounding context buildings so the site reads in three dimensions. Ask: what scale lets the blocks and the site read together?",
      "Assemble the program blocks — reuse existing blocks of similar use and scale, or make new labeled ones from the program-block template. Ask: which uses, and how many, does this program actually need?",
      "Pick a material that's easy to mass-produce, cut, color-code, label, and transport, and durable enough to handle (½\" foam core has worked well). Ask: easy to move, cut, code, label — and how many, how fast?",
      "Set up in a large, clear space where you can pin up references (program, zoning, environmental analysis, engagement summary) and leave the model standing — maybe 1–2 weeks if the team will keep returning to it.",
      "Run focused sessions (1–2 hours): move blocks to test site and building organization against the themes, the program, and the site's constraints.",
      "Document with photos at the end, and clearly capture the major takeaways, strategies, and decisions — so the team can refine them later, not re-litigate them.",
    ],
    resources:[
      {label:"Program block template (CAD / Illustrator / InDesign)", link:"#"},
      {label:"Base map template — pre-loaded graphics & labels", link:"#"},
      {label:"Block material & fabrication guide (½\" foam core, scales, color key)", link:"#"},
      {label:"Charrette setup & documentation checklist", link:"#"},
    ],
    source_links:[],
    gallery:[
      {src:"images/program-block-1.jpg", caption:"Program blocks on the scaled site base"},
      {src:"images/program-block-2.jpg", caption:"Testing layouts together in the charrette"},
      {src:"images/program-block-3.jpg", caption:"Labeled program blocks + context model"},
    ],
    related:["quick-dirty-model","labwc-massing-story"],
    ask_me:"Tola Thomas & Sara Samar",
  },
  {
    id:"coding-and-analyzing",
    date:"2026-06-28",
    title:"Coding & analyzing",
    facets:{phase:"Concept Development", sub_phase:"Predesign — Due diligence & data collection",
      process_type:"coding & analysis", concept_tags:["feasibility/finance"]},
    narrative:"Working the zoning code and site data to find what's allowable and what it costs — envelope, FAR, parking, incentives — and turning that into clear options.\n\nDone early, it keeps the concept grounded in what can actually be built and funded, and it gives the client real choices instead of a single number.",
    steps:[
      "Read the code for the controlling limits and any incentives.",
      "Model the allowable envelope precisely.",
      "Test the program against it; find where it pushes back.",
      "Quantify the trade-offs and bring options, not just a maximum.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
  {
    id:"kickoff-charrette",
    date:"2026-06-29",
    title:"Designing the Design Charrette",
    thumbnail:"images/charrette-siteplan-markup.jpg",
    facets:{project:"Log Cabin", phase:"Concept Development", sub_phase:"Ideation, visioning & analysis",
      process_type:"design charrette", concept_tags:["engagement method","feasibility/finance"]},
    keywords:["charrette","design charrette","kickoff charrette","concept charrette","working session","war room","pin-up","trace paper","site plan","post-its","sticky notes","brainstorm","ideation","design direction","design drivers","collaborative design","in-person session"],
    narrative:"A single in-person kickoff charrette where the team — starting from pretty limited site and program info — generated a design direction and a clear list of what to produce for the design package due the following week. A comprehensive deliverable was due in a short window, and this was our only time together as a team on it, so we couldn't just explore: we had to walk out with answers about what the design would be and how we'd communicate it. We were designing the design and designing the pitch at the same time, and we covered as much ground as we could because we knew we only got one shot in the room together.\n\nThree things made it work: we were in person, we blocked real time (a room for 2–3 hours, so everyone was set to stay in the project headspace), and — the actual unlock — we had something tangible to design on. The format reflects how the studio works: keep the design drivers, context, and info viewable to everyone as you go; move quickly so you don't get stuck overthinking or over-presenting; put pen to paper and iterate as much as possible. That matters because without a shared, visible, drawable surface, the team drifts into talking abstractly — people get afraid to commit ideas, so they either hide in one small detail or float big ideas that can't be tested on paper. A tangible surface everyone can reach is the antidote to both.",
    steps:[
      "Block real time, in person — one room, 2–3 hours, the whole team present. Ask: is everyone set to stay in this project's headspace for the full stretch?",
      "Prep the room before anyone sits down — so the drivers are not just visible but reachable by everyone. Have it all up: a large scaled site plan or model (print it ahead — we once lost ~30 minutes making one mid-session), trace paper, post-its, markers, printed site photos, the site analysis, the program brief, and engagement / project summaries. Don't rely on small 11×17 maps taped to the wall as your only surface — fine for context, but you can't get messy on them. Ask: can every person both see the drivers and reach a large drawable surface, with no single hot corner?",
      "Open with discovery — whoever owned the pre-charrette research walks the team through it (often several people, each presenting their part: site images and maps, existing conditions, program, engagement). Everyone marks up as they go; spend real time here (~30+ min) settling into the constraints. Ask: what here could become a design driver, not just a constraint?",
      "Get to the drawable surface. Pull trace paper over the site plan and start sketching options together — this is when designing actually starts. Keep momentum: if the talk goes abstract, that's the signal to get something tangible in front of people. Watch for anyone hiding behind one small detail or behind big untestable ideas — the shared surface is what draws them out. Ask: are we putting pen to paper, or still talking in the abstract?",
      "Design the direction and the pitch together. As moves land, capture not just the idea but how you'd show it next week. Ask: what do we need to produce to communicate this, and who makes it?",
      "Leave with a direction and a production list — a committed design direction plus a concrete list of what to make and who owns it. Ask: could everyone in the room say what we're doing and what they're making next?",
    ],
    resources:[
      {label:"The room kit — scaled site plan/model · trace paper · post-its · markers · printed site photos · site analysis · program brief · engagement & project summaries", link:"#"},
    ],
    source_links:[{label:"Design direction + production plan that fed the design package (Drive folder)", drive_url:"#"}],
    gallery:[
      {src:"images/charrette-drivers-wall.jpg", caption:"Context and emerging themes made visible to the whole room"},
      {src:"images/charrette-siteplan-markup.jpg", caption:"The unlock — a large site plan on the table, marked up so everyone can design on it"},
      {src:"images/charrette-program-wall.jpg", caption:"Program and ideas committed to the wall where everyone can see them"},
      {src:"images/charrette-worksession-1.jpg", caption:"The whole team around one table — drivers and materials reachable by everyone"},
      {src:"images/charrette-worksession-2.jpg", caption:"Working the program together, pen to paper, no single hot corner"},
      {src:"images/charrette-model-making.jpg", caption:"Pushing into tangible, physical iteration as a group"},
      {src:"images/charrette-model-detail.jpg", caption:"The physical model as a thinking tool"},
    ],
    related:["program-block-site-model","quick-dirty-model","internal-design-review"],
    ask_me:"Garrett Jacobs",
  },
  {
    id:"internal-design-review",
    date:"2026-06-28",
    title:"Internal design review",
    facets:{phase:"Concept Development", sub_phase:"Integration & concept design",
      process_type:"internal review", concept_tags:["engagement method"]},
    narrative:"A structured critique among the studio to stress-test a concept before it goes out — does it hold to the values, the program, and the site?\n\nIt catches problems while they're still cheap to fix, and keeps the work accountable to intent rather than taste.",
    steps:[
      "Present the concept and the drivers behind it, briefly.",
      "Invite critique against the intent and constraints, not personal taste.",
      "Surface risks and the questions that are still open.",
      "Agree on what changes before the next step, and record it.",
    ],
    resources:[], source_links:[], ask_me:"",
  },
];
