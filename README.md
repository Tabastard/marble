# Marble

A small world in a glass sphere, and the builds, studies and tools that made it.

This repo is the public site: <https://tabastard.github.io/marble/>. It holds only the pieces chosen for showing. The working folder, with every round, note and experiment, is private.

## Adding a piece

1. Copy its folder in under `rounds/`, `studies/` or `tools/`. Each piece is a self-contained HTML page, so nothing else needs to come with it.
2. Add a `cover.jpg` in that folder (16:10).
3. Add one entry to its group in `GROUPS` at the top of `index.html`, with a short `sub` line and a sentence or two of `text`. `PLAY` there is the current game: it is the landing at the top, the page opens on it and its START key launches it.
4. Commit and push. GitHub Pages publishes it in about a minute.

Published copies never carry the owner's first name: it becomes "Designer" (and a lowercase code key becomes `designer`, so filters keep working). A local pre-commit hook in this clone refuses any commit whose text files contain it; pictures have to be checked by eye.

The page is three columns: a side panel (Play and the three sections), one scroll that opens on the current game and runs on through every piece as tiles or rows, and on the right what the chosen piece is and its prompt or notes. A tile's play button and title open it; a click anywhere else on it chooses it and puts it in the address (`#water`), so a link can open straight onto it. Pieces open in the same tab, and the back button returns to the one you chose.
