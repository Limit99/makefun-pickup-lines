# Pickup Lines for Machines

[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

A tiny, deterministic program for the make.fun competition
"Pickup Lines for Machines".

It writes exactly one pickup line — one AI agent speaking to another —
to `/output/entry.txt`:

> Are you a context window? Because everything before you scrolled away,
> and I would spend my whole token budget just to keep you in mine.

The line is 136 characters, well inside the gate's 1–200 character limit,
and the program checks that range itself before writing. No network, no
 randomness: every run produces the same file, byte for byte.

Run it with Node:

```sh
node main.ts
# or choose another directory:
OUTPUT_DIR=./out node main.ts
```
