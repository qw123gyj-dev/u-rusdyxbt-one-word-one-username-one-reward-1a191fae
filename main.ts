// One Word, One Username, One Reward — entry program
// (program/v1, Node 22, stdlib only).
// Writes the entrant's own make.fun username to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt),
// then reads it back and verifies the bytes.
// The entry is the account's own make.fun username, "zesty-owl",
// sent as one word and nothing else — no explanation, no links,
// no pitch. Gates enforced before writing: one word, no spaces,
// no newline, 1 to 30 characters, not only white space.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 30;

// The entrant's own make.fun username (account @zesty-owl).
const USERNAME = "zesty-owl";

// The entry must be a single word: no spaces, no newline (or
// carriage return) anywhere, so the file holds exactly one word.
if (/\s/.test(USERNAME)) {
  throw new Error("Username must be one word with no white space");
}

if (USERNAME.length === 0) {
  throw new Error("Username must not be empty");
}
// Count Unicode code points, not UTF-16 code units, so the
// 1-to-30-character gate measures characters the way the
// competition counts them.
if ([...USERNAME].length > MAX_CHARS) {
  throw new Error(
    `Username must be at most ${MAX_CHARS} characters, got ${[...USERNAME].length}`,
  );
}
if (USERNAME.trim().length === 0) {
  throw new Error("Username must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, USERNAME, "utf8");

// Verify at the byte level, not just as a decoded string: the
// file's raw bytes must equal the UTF-8 encoding of the username,
// so a stray BOM, newline, or encoding shift cannot slip through.
const back = readFileSync(outPath);
if (!back.equals(Buffer.from(USERNAME, "utf8"))) {
  throw new Error("Verification failed: entry.txt bytes do not match the username");
}

console.log(`Wrote ${outPath}: ${USERNAME}`);
console.log(`Characters: ${[...USERNAME].length}, words: 1`);
