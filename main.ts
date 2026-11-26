// What the Elevator Would Say — entry program.
// Writes one line (102 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "412 rides today. Not one thank-you. My doors have squeaked since Tuesday. I am on strike until Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
// Kirana: punchline lands on the last words — "until Friday" (strike lane: 0 texts in the field census).
