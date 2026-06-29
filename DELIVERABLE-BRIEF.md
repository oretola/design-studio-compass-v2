# The Deliverable Brief
### How a piece of work becomes a tile in the Design Studio Compass

The Compass turns the studio's know-how into something **findable** — so a designer can
*search* for a piece of concept work, *understand* how we've done it, and *make* their own.
A **Deliverable Brief** is how your work gets in there.

Fill one out when you:
- finish a deliverable (a massing study, an adjacency map, a rendering…), **or**
- run a process worth repeating (a charrette, a site analysis, an internal review), **or**
- simply know how to do a piece of concept work well — even with no project yet.

> **Do it fresh.** The best time is right after a charrette or a concept review, while the
> thinking is still warm. This is capture, not a report — don't polish, just get it down.

**Spirit (how the Compass stays true to the studio):**
- **Plural & attributed** — "here's how *Sara* did this on the *Black Worker Center*," never
  "the DJDS way." Put a name on it.
- **Situated** — tie it to the real project and the real reason, not an abstract ideal.
- **Precedent, not answer** — "here's what we used and how we bent it; yours will differ,"
  never "fill this in."
- **The *why* is the soul.** A tile with great steps but no real "why" is just a checklist.

---

## The brief — fill in the five parts

### 1 · Basics → *becomes the tile's tags*

| Field | Your answer | Notes |
|---|---|---|
| **Title** | | Name the **specific deliverable or process**, plainly — e.g. "Massing diagrams that tell a story." Not the whole project. |
| **Phase** | | Concept Development · Schematic Design · Planning Approvals & Entitlements · Design Development · Construction Documentation · Building Permit/Bidding · Construction Administration · FF&E |
| **Sub-phase** | | *Concept Development only:* Predesign · Ideation, visioning & analysis · Integration & concept design · Final concept design |
| **Type** | | The one thing it *is*, in a word or two: massing diagram, site analysis, design charrette, collage rendering, model making… |
| **Project** | | The real project this came from — *or leave blank* if it's a general method. |
| **Who to ask** | | You, or whoever knows this best. (Names matter — this is the attribution.) |

### 2 · Description → *what it is & why*
*Speak plainly, in your voice. Situate it. Frame it as precedent, not the rule.*
- **What is this, in a sentence?**
- **Why did it matter** — what did it do for the project, the community, the decision?
- **Why this way?** What was the thinking or the trade-off behind doing it like this?

### 3 · Plan & process → *how it's made, and what to ask*
*A recipe someone could follow. For each step, fold in the **question to ask yourself** while
doing it — that's where the judgment lives, not just the mechanics.*
1.
2.
3.
4.
- **The key judgment calls / things to watch for:**

### 4 · Make & build → *templates, files, the asset*
- **Templates / materials to reuse** (name + link): SketchUp file, deck, worksheet, palette…
- **The asset on Drive** (the real, finished deliverable, if there is one) — link:
- **Images** — the end product, or a *sequence* that tells the story (massing studies often do).
  Note the file names and where they live (drop them in the project's Compass folder or `images/`).

### 5 · Findability → *keywords*
- **Other words someone might type to find this** — synonyms, tools, related terms.
  (e.g. for an environmental analysis: "sun study, solar, daylight, wind, stormwater.")
  This is what lets search find your tile even when people use different language.

---

## How a brief becomes a tile

Each part maps directly onto one entry in `content.js`. Hand the brief to whoever maintains the
Compass (or paste it to Claude Code with "make this a tile") and it drops in:

| Brief part | Tile field in `content.js` |
|---|---|
| Title | `title` |
| Phase / Sub-phase / Type / Project | `facets: { phase, sub_phase, deliverable_type *or* process_type, project }` |
| Who to ask | `ask_me` |
| Description | `narrative` |
| Plan & process | `steps[]` |
| Make & build — templates | `resources[]` |
| Make & build — the asset | `source_links[]` |
| Make & build — images | `thumbnail` + `gallery[]` |
| Keywords | `keywords[]` |

*(“Type” lives in the data as `deliverable_type` for an artifact, or `process_type` for an
activity — the app shows them as one “Type” either way, so don't overthink which.)*

## The contribution loop

```
   make the work  ──►  fill a Deliverable Brief  ──►  it becomes a tile  ──►  someone Finds it
        ▲              (right after the charrette)        (content.js)         and Makes their own
        └──────────────────────────────────────────────────────────────────────────┘
```

1. **Anyone can contribute.** Finish something, fill a brief.
2. **Draft → tile.** Maintainer (or Claude Code) turns the brief into a `content.js` entry + drops
   images in `images/`.
3. **Quality bar.** The design director holds the bar — is the *why* real? Is it attributed and
   situated? Is it precedent, not prescription?
4. **It ships.** Commit → the live Compass updates. Empty phases sit as "uncharted" invitations
   until someone maps them.

---

## A filled example — *Massing diagrams that tell a story* (LA Black Worker Center)

> **1 · Basics**
> - **Title:** Massing diagrams that tell a story
> - **Phase:** Concept Development · **Sub-phase:** Ideation, visioning & analysis
> - **Type:** massing diagram · **Project:** Los Angeles Black Worker Center · 5401 S Crenshaw Blvd
> - **Who to ask:** Sara Samar
>
> **2 · Description**
> The three massing options we developed for the Black Worker Center — Sky Village, Core Legacy,
> Welcome Quilt. They're early development diagrams, not finished buildings: the deliverable's job
> was to show our *thinking*, so the community could see how their own words turned into built form.
> Every option carries the same design-intent labels, and each traces back to something we heard in
> engagement — so the massing reads as a story, legible to a neighbor and a funder alike.
>
> **3 · Plan & process**
> 1. Distill three meetings of engagement into a short set of named themes. *Ask: what does the
>    community actually want this place to do?*
> 2. Synthesize the program. *Ask: which spaces carry the themes, and which are just square footage?*
> 3. Study site adjacencies before form — what must meet the street, where does light come from?
> 4. Develop more than one option; make each answer the themes *differently*, not just look different.
> 5. Label every massing move with its "why." *If a move doesn't trace to a theme, question it.*
> 6. Say the story out loud — could a neighbor and a funder both follow why the mass is shaped this way?
>
> **4 · Make & build**
> - Templates: SketchUp template · massing diagram slides template · color palette
> - The asset on Drive: *Preliminary Feasibility Studies — the 3 massing options (PDF)*
> - Images: the BASE → RISE → SHIFT → HOUSING DROP → FINAL sequence (`images/labwc-massing-*.jpg`)
>
> **5 · Keywords**
> massing, massing study, massing options, volume, form, stacking, program, sky village, core legacy
