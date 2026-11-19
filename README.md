# Marble

A small world in a glass sphere, and the builds, studies and tools that made it.

This repo is the public site: <https://tabastard.github.io/marble/>. It holds only the pieces chosen for showing. The working folder, with every round, note and experiment, is private.

## Adding a piece

1. Copy its folder in under `rounds/`, `studies/` or `tools/`. Each piece is a self-contained HTML page, so nothing else needs to come with it.
2. Add a `cover.jpg` in that folder (16:10).
3. Add one entry to its group in `GROUPS` at the top of `index.html`, with a short `sub` line and a sentence or two of `text`. `PLAY` there is the current game: it is the landing at the top, the page opens on it and its START key launches it.
4. Commit and push. GitHub Pages publishes it in about a minute.

Published copies never carry the owner's first name: it becomes "Designer" (and a lowercase code key becomes `designer`, so filters keep working). A local pre-commit hook in this clone refuses any commit whose text files contain it; pictures have to be checked by eye.

The page is two columns. On the left, the name and every piece as a list, by section (Play, then each group). On the right, the stage: the chosen piece as a card (its picture, and beside it its name, what it is and its START or OPEN key), and under the card its prompt (its title, the model that built it and the text) or its notes, read from their own pages. It opens on the current game. Choosing a piece puts it in the address (`#water`), so a link can open straight onto it; up and down step through the list. Pieces open in the same tab, and the back button returns to the one you chose. On a phone the stage comes first and the list follows.
