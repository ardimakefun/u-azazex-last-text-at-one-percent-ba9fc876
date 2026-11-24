import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "1%. You left me unplugged all night for one more episode, so I'm dying mid-sentence to make you feel guilty. It worked, didn...";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
