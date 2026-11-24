import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "1%. You left me unplugged all night for one more episode, so I'm dying mid-sentence to make you feel guilty. It worked, didn...";
const LIMIT = 200;
const len = [...LINE].length;
if (len < 1 || len > LIMIT) {
  console.error(`entry length ${len} code points outside gate 1..${LIMIT}`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
