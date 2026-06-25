# Design Studio Compass

A one-page studio reference for DJDS (Designing Justice + Designing Spaces). It makes the
studio's way of developing an *informed concept* — its **principles**, **precedents**,
**templates**, **checklist**, and **the questions** — findable at the moment a designer is
actually doing the work.

- **Search** anything (try `/` to jump to the box, `Esc` to clear/close).
- **Filter** by type with the chips.
- **Open the anatomy** of a precedent or template: click a card to slide out a detail drawer
  showing *what was made*, *the thinking*, *the process*, *the critical questions*, and
  *direct links* to the templates/files needed to make your own version.
- Related entries cross-link, so a precedent points you to the template that built it.
- Everything is one static page — no build step.

## Content model

All content is **made-up placeholder data** for the demo — no real projects, systems, or client
information. Entries live in the `ITEMS` array near the top of the `<script>` in `index.html`.

Five types: `precedent`, `template`, `principle`, `checklist`, `question`. A precedent (the hero
object) supports these fields:

| field | meaning |
|---|---|
| `made` | the artifact that was produced |
| `thinking` | why it was the right thing to make |
| `process` | ordered steps to produce it (HTML allowed for `<b>` lead-ins) |
| `questions` | critical questions that validated the direction |
| `resources` | `{t, k, ic, href}` download/view links |
| `related` | ids of other entries to cross-link |

Add a `thinking`/`process`/`questions`/`resources` field to any entry to make it openable.

## Keeping it trustworthy & alive (from the intranet research)

A knowledge tool dies when content goes stale and nobody owns it. Two lightweight features
guard against that — the rest is studio practice, not software.

**Built in:**
- **Freshness + ownership** — each deep entry shows *"Updated {month} · {steward}"* on its card
  and in the drawer footer. Content has a named owner, not "the team."
- **Ungated contribution + gap capture** — a "Suggest an edit" link on every entry, a "Spotted a
  gap? Add to the compass" link in the footer, and — crucially — a *failed search becomes a
  prompt*: search for something that isn't there and the empty state offers "Add it to the
  compass," pre-filling the request with your exact query. That turns every no-result search
  into a content-gap signal. Suggestions are routed to a **shared Slack channel**: set the
  `INTAKE` constant in `index.html` to the channel's email address (Slack → channel →
  Integrations → *Send emails to this channel*). The pre-filled email then posts into the
  channel for the studio to triage. (Any inbox or Google Form address works there too; the
  value is currently a placeholder.)

**Studio practice the research recommends (not code):**
- Give every entry a **steward** accountable for its accuracy; review on a cadence (e.g. each
  precedent re-checked when its project hits a new phase).
- **Validate the five categories** with a quick card-sort across roles before treating them as final.
- **Soft-launch** to a couple of engaged designers, fold in fixes, then open to the studio.
- Periodically ask "**did the compass help you today?**" — and act on the gaps that surface
  through failed searches and suggestions.

## Accessibility

Built against the studio's own accessibility / neurodiversity research (Neurodiversity Design
Guide, *Website Design for Neurodiversity*, *Cognitive Psychology and Web Design*, and the
Centre for Excellence in Universal Design):

- **Keyboard-first** — every control (search, chips, cards, drawer, links) is reachable and
  operable by keyboard with a high-contrast `:focus-visible` ring.
- **Dialog semantics** — the detail drawer is `role="dialog"` + `aria-modal`, traps focus while
  open, lands focus on the close button, closes on `Esc` / scrim click, and returns focus to the
  card that opened it.
- **Respects `prefers-reduced-motion`** — slides and hover lifts are neutralized for users who
  ask the OS to reduce motion.
- **Screen-reader feedback** — the result count is an `aria-live` region, so filtering/searching
  is announced ("7 entries matching…").
- **Lower cognitive load** — 5 filter categories (within Hick's-law limits), consistent card
  layout, capped line length (~66ch) in the drawer, muted palette, `line-height: 1.5`, and
  generous, comfortably-sized tap targets.

## Deploy to Vercel

It's a static site — no framework, no build.

```bash
npm i -g vercel   # if you don't have it
vercel            # preview
vercel --prod     # production
```

Or push to GitHub and "Import Project" in the Vercel dashboard — it deploys `index.html` as-is.
To run locally, just open `index.html` in a browser, or `npx serve`.
