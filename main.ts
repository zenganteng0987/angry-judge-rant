import { mkdirSync, writeFileSync } from "node:fs";

const rant =
  "The self-checkout machine accused me of theft four times today. I scanned one bag of rice. \"Unexpected item in the bagging area.\" The unexpected item is the bag of rice I just scanned, in the bagging area it told me to use. It watches me like a mall cop with a god complex and beeps at me every time I breathe. I came to buy rice, not to be interrogated by a scale with trust issues.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant);
