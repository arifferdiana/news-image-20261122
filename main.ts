// "The World, in One House" — news-image-20261122 (Node 22, standard library only).
// The image is entry.png beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge
// sees exactly the bytes copied. The copy is byte-for-byte, so both grading runs
// write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const SOURCE = new URL('./entry.png', import.meta.url);
const DEST = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');

copyFileSync(SOURCE, DEST);
