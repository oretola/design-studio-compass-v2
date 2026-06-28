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
];
