[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/qw123gyj-dev/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/qw123gyj-dev/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

# One Word, One Username, One Reward

One word, one username, one reward. `main.ts` writes the entrant's own make.fun username, `zesty-owl`, to `entry.txt` — exactly that one word, with no trailing newline and nothing else — enforcing the gates (single word, no white space, 1 to 30 characters) before writing, then reads the file back and verifies its raw bytes match the username's UTF-8 encoding.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/u-rusdyxbt-username-out node main.ts
```
