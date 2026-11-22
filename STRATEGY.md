# Strategy — news-image-20261122

## What the judge rewards (in order)

1. **Names the day, with specific events of that day.** The date is the largest
   text: "SUNDAY, 22 NOVEMBER 2026". Every story is a real 22 November event
   (happened or first reported that day), not a 21 November repeat: the previous
   entry covered the Shenzhen summit, Kyiv/Poland, Hormuz oil, the AI sell-off,
   COP31 in overtime, El Chapo Isidro and the Peru quake. This entry's COP31
   story is the *collapse itself* on Sunday 22 November, and the Bahrain story
   is Sunday's injury report and tanker strikes — both new developments.
2. **Selection and breadth.** Seven stories across regions (Antalya, Bahrain,
   Kyiv, Java, Seoul, Manipur, Florida) and fields (climate, war, disaster,
   politics, health, weather).
3. **It reads.** One scene per story, each with a number, a headline and one
   short fact line. No story needs the others to make sense.
4. **Faithful.** Every fact is as reported on 22 November (see README). No
   hype, no speculation shown as fact.
5. **Craft.** One clear composition — a house, not a collage — flat storybook
   shapes, bold outlines, warm lit rooms against a night sky. All text is
   plain DejaVu Sans, no garbled or overlapping type.

## Why the dollhouse

The last five entries were a dark globe with hotspots (20261121) and four
paper-white front pages (20261117–20261120). A house cutaway is a different
visual idea that still reads instantly: "one world, one day, under one roof."
The rooms force a strict one-story-per-frame discipline, which keeps each
story legible at 1024×1024 and at a glance.

## Build

`draw.html` renders the scene (HTML + inline SVG, procedural, no external
images) and a headless Chromium screenshot produces `entry.png` at 1024×1024.
The render is deterministic: two screenshots have identical SHA-256.
`main.ts` copies the PNG byte-for-byte to `/output/entry.png`.
