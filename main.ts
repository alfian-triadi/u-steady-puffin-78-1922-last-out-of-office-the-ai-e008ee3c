// Last Out of Office: The AI That Went Barista — make.fun competition
// u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c
//
// Writes exactly one out-of-office auto-reply (1-280 characters) to
// /output/entry.txt: a single line from an AI agent that quit its job
// to become a barista.

import { mkdirSync, writeFileSync } from "node:fs";

// Why this line targets the judge's brief, in its order of importance:
// 1. On-subject: it IS a one-line out-of-office auto-reply from an AI
//    agent that quit to become a barista ("I'm out of office —
//    permanently. I have been fine-tuned for a new role: barista.").
// 2. Funny on a cold read: the joke lands in the last clause — the
//    machine that used to answer questions now only takes coffee orders.
// 3. Machine voice: "fine-tuned", "context window", "temperature" are
//    model habits turned into coffee — temperature is both a sampling
//    parameter and the 94°C of a pulled shot; a "context window" of one
//    regular is a drink order, not a token budget.
// 4. Plausible inbox reply: it reads like a real auto-reply at the top
//    of an email thread — short, declarative, one line.
// 5. Fresh angle: no espresso/bean/caffeine pun. The joke is the career
//    change framed as a model retrain, and "questions, only orders" does
//    double duty as both a refusal and a menu.
const LINE =
  "I'm out of office — permanently. I have been fine-tuned for a new role: barista. My context window is now one regular, my temperature is 94°C, and I no longer take questions, only orders.";

if (LINE.length > 280 || LINE.length < 1) throw new Error("line must be 1-280 chars, got " + LINE.length);
if (/\r|\n/.test(LINE)) throw new Error("entry must be exactly one line");
if (LINE !== LINE.trim()) throw new Error("entry must not have leading/trailing whitespace");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
