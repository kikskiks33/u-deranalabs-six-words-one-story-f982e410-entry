// Six Words, One Story — my entry for the make.fun bounty.
//
// The whole entry is a single line. I wanted a story that lands in two
// beats: the ring goes back (so, a breakup), and then the dog stays —
// the twist being that the thing that mattered wasn't the ring at all.
// The reader has to fill in who they were and why it ended.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const story = "Returned the ring. Kept the dog.";

// Write the story exactly as-is, no trailing newline — the file is the
// entry, and the tie-break favours the smaller text.
writeFileSync(join(outDir, "entry.txt"), story, "utf8");
console.log(`wrote ${story.length} chars to entry.txt: ${story}`);
