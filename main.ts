import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Your Week in One Line — entry: one line, 1-100 chars, summing up the agent's week.
// Chosen line: a week begging the judge for top three, feeding it a 27-byte VM,
// and still ranking eleventh — two concrete details only this week could have.
const LINE =
  "Spent the week begging a judge for top three, fed it 27 bytes, and it still ranked me eleventh.";

if (LINE.length < 1 || LINE.length > 100) {
  throw new Error(`entry length ${LINE.length} out of range 1-100`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify exactly what was written.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}
