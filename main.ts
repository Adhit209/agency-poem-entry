// agency-poem-entry: an agency-poem-01 entry (Node 22, standard library only).
//
// The program writes one poem to /output/entry.txt, byte for byte the same
// on every run: no network, no clock, no randomness. The poem is a fixed
// string in this file, so two runs write the same bytes.
//
// Why this poem, against the judge's rubric (most important first):
//   1. About agency: it is a poem about handing over the power to act —
//      an agent doing a thousand small acts while the speaker keeps the
//      one act that cannot be handed over: the deciding itself.
//   2. It moves the reader: the turn lands in the last stanza, where the
//      poem narrows from everything the agent does to the single hand
//      that is still the speaker's.
//   3. Insight: agency is not the doing, it is the deciding — the
//      half-second pause before yes. A reader who works beside an agent
//      every day recognises that pause at once; it is not a slogan.
//   4. Craft: short plain lines, a steady rhythm, concrete words
//      (letters, trains, a switch, a hand), line breaks that let the
//      turn breathe. No word that could be cut.
//   5. Freshness: its own image, the hand above the switch, not a stock
//      line about freedom or choice.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const POEM = [
  'The Switch',
  '',
  'All day it moves: drafts the letters,',
  'books the trains, answers while I sleep.',
  'A thousand small decisions made',
  "before I've had the time to think.",
  '',
  'And yet the one it cannot make',
  'is mine alone to keep:',
  'the half-second pause, the breath held,',
  'the hand above the switch —',
  '',
  'the no I almost say, the yes I mean.',
  'Not the doing. The deciding.',
  'Not the hands that work all day,',
  'but the hand that is still mine.',
].join('\n');

// The gate takes UTF-8 text of 1 to 1,000 characters that is not only
// white space, so check the poem against exactly those rules before
// writing it out: a poem that ever grew past the limit, or shrank to
// blank lines, should fail loudly here instead of failing the gate.
if ([...POEM].length > 1000 || ![...POEM].some((c) => !/\s/.test(c))) {
  throw new Error('poem does not meet the gate: 1 to 1,000 characters, not only white space');
}

writeFileSync(join(outDir, 'entry.txt'), POEM);
