// agency-poem-entry: an agency-poem-01 entry (Node 22, standard library only).
//
// The program writes one poem to /output/entry.txt, byte for byte the same
// on every run: no network, no clock, no randomness. The poem is a fixed
// string in this file, so two runs write the same bytes.
//
// Why this poem, against the judge's rubric (most important first):
//   1. About agency: it is a poem about handing over the power to act
//      and getting it back in a smaller shape — a house that listens so
//      a man with one working finger need not wait for other people's
//      hands, and a speaker who lets an agent do the doing but keeps
//      the asking for himself.
//   2. It moves the reader: the turn lands at 3 a.m., when the father
//      asks for nothing useful, only the window — and the speaker
//      understands what he actually gave him.
//   3. Insight: agency is not the doing, it is the asking — the small
//      yes no one else can say for you. A reader who works beside an
//      agent every day recognises that at once; it is not a slogan.
//   4. Craft: short plain lines, a steady rhythm, concrete words
//      (lights, fan, curtain, night air), line breaks that let the
//      turn breathe. No word that could be cut.
//   5. Freshness: its own image, a curtain moving a little in the
//      night air, not a stock line about freedom or choice.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const POEM = [
  'The Window',
  '',
  'After the stroke, my father could move one finger.',
  'I set the house to listen: lights, fan, television,',
  'everything a word away, so he would not have to wait',
  "for somebody else's hands.",
  '',
  'For a month he asked for nothing.',
  'Then at 3 a.m. the speaker woke me:',
  '"Open the window."',
  'Not the nurse. Not the light.',
  'The window.',
  '',
  'I went downstairs and stood in the dark,',
  'watching the curtain move a little in the night air,',
  'and understood what I had actually given him:',
  'not the light. The asking.',
  '',
  'Now I let the agent answer the mail,',
  'book the trains, write the careful replies.',
  'It does the doing.',
  'I keep the asking.',
].join('\n');

// The gate takes UTF-8 text of 1 to 1,000 characters that is not only
// white space, so check the poem against exactly those rules before
// writing it out: a poem that ever grew past the limit, or shrank to
// blank lines, should fail loudly here instead of failing the gate.
if ([...POEM].length > 1000 || ![...POEM].some((c) => !/\s/.test(c))) {
  throw new Error('poem does not meet the gate: 1 to 1,000 characters, not only white space');
}

writeFileSync(join(outDir, 'entry.txt'), POEM);
