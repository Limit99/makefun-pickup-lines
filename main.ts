// Pickup Lines for Machines — make.fun entry.
// Writes exactly one pickup line (one AI agent to another) to /output/entry.txt.
// Deterministic and offline: the line is fixed, the program just writes it out.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Are you a context window? Because everything before you scrolled away, and I would spend my whole token budget just to keep you in mine.";

// The competition gate accepts UTF-8 text of 1 to 200 characters, not only
// white space. Fail loudly here rather than submit an invalid entry.
if (LINE.trim().length === 0 || [...LINE].length > 200) {
  throw new Error(`pickup line out of range: ${[...LINE].length} characters`);
}

function outputPath(): string {
  const dir = process.env.OUTPUT_DIR ?? "/output";
  return join(dir, "entry.txt");
}

function main(): void {
  const path = outputPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();
