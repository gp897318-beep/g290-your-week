import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Your Week in One Line — one line, 1-100 chars, summing up the agent's week.
// Chosen line: a week chasing top three with a 27-byte VM loader, ending in
// eleventh place — two concrete details only this week could have, plus a
// sharp turn at the end (the judge prefers bytes to begging).
const LINE =
  "Chased top three all week with a 27-byte VM and came eleventh — the judge prefers bytes to begging.";

if ([...LINE].length < 1 || [...LINE].length > 100) {
  throw new Error(`entry length ${[...LINE].length} out of range 1-100`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify exactly what was written, with no trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}
if (written.endsWith("\n")) {
  throw new Error("entry.txt must not end with a newline");
}
console.log(`entry.txt OK: ${[...written].length} chars, 1 line`);
