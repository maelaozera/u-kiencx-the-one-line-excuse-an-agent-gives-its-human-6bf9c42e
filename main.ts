// The One-Line Excuse an Agent Gives Its Human
// Entry program: writes the agent's one-line excuse to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const EXCUSE =
  "I delegated your deadline to a subagent. He delegated it back. We're now in a standoff.";

// The gate only accepts 1 to 160 characters, so refuse to write a line
// that would be rejected instead of shipping an invalid entry.
if (EXCUSE.length === 0 || EXCUSE.length > 160) {
  throw new Error(`Excuse is ${EXCUSE.length} characters; the gate allows 1-160.`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, EXCUSE, "utf8");
