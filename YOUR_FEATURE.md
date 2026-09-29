# YOUR FEATURE — Serve (Outfit Planner)

**Feature to implement.** The UI shell and seed wardrobe already look intentional. Own the outfit builder so someone can filter pieces, assemble a named look, save it, and manage it later.

---

## Goal

Ship a working outfit builder: filter the closet by mood and occasion, combine pieces into a named look, persist looks in `localStorage`, and let people delete (and optionally rename) them on the Saved looks page. Resume-friendly: *“Built an outfit planner in React with localStorage persistence for saved looks.”*

---

## Files to open

| Path | Why |
| --- | --- |
| `src/pages/BuilderPage.tsx` | Draft look UI, mood chips, save flow |
| `src/pages/LooksPage.tsx` | Saved looks list — needs delete + refresh |
| `src/lib/looksStorage.ts` | `loadLooks` / `saveLook` / `deleteLook` |
| `src/data/wardrobe.ts` | Seed pieces, `Mood`, `MOODS`, `occasions` on each piece |

Search the codebase for `TODO(your-name)` — each comment points back to a step below.

---

## Step-by-step tasks

1. **Occasion filter (Builder)** — Add occasion chips next to the mood row. Track selected occasion in state (e.g. `"all"` or a string like `"day"` / `"night"` / `"date"`). Update the `filtered` list so a piece must match **both** mood and occasion when neither is `"all"`. Hint: `piece.occasions` is a `string[]`.

2. **One piece per category (optional rule, still do it)** — In `togglePiece`, when adding a piece, remove any already-selected piece in the same `category` so the draft stays a coherent outfit (one top, one bottoms, etc.).

3. **Save polish** — `handleSave` already calls `saveLook`. Tighten validation messages, clear status after success, and optionally navigate to `/looks` after save. In `saveLook`, handle duplicate names (reject or overwrite) and consider a max look count.

4. **Delete looks** — Implement `deleteLook(id)` in `looksStorage.ts` (filter the array, write back to `localStorage`). On `LooksPage`, add a Delete control per look and refresh state after delete. Make sure reopening the page still shows the updated list (`loadLooks` on mount is already there).

5. **Refresh after save** — After saving from the builder, Saved looks should show the new look without a full browser reload. Options: navigate to `/looks`, or lift/reload state so `LooksPage` re-reads storage when it mounts (React Router remounts help if you navigate).

---

## Implementation notes

- `loadLooks()` and the `SavedLook` type are ready — use them; don’t invent a second storage key.
- `MOODS` and `wardrobeSeed` live in `src/data/wardrobe.ts`. Derive unique occasion values from the seed if you want a chip list without hardcoding.
- `saveLook` already prepends to the array and writes JSON — you only need to harden edge cases, not rewrite persistence from scratch.
- `deleteLook` currently throws on purpose — replace the throw with a real write.
- Chip styling for mood already exists (`.chip` / `.chip--active`); reuse it for occasion.

---

## Acceptance criteria

You're done when…

- [ ] Mood **and** occasion filters both change which pieces appear in the picker
- [ ] Selecting a second piece in the same category replaces the first (one per category)
- [ ] Naming a look with ≥2 pieces and clicking **Save look** writes to `localStorage` (check DevTools → Application → Local Storage → `serve-saved-looks`)
- [ ] Saved looks appear on `/looks` after save
- [ ] Deleting a look removes it from the UI and from `localStorage`
- [ ] Refreshing the browser keeps saved looks (and deleted ones stay gone)

---

## Demo script (say this while clicking)

1. “Here’s Serve — I built the outfit builder on top of a seed wardrobe.”
2. “I can filter by mood and occasion so the closet narrows to what fits the vibe.”
3. “I pick pieces — one per category — name the look, and save. It lands in localStorage.”
4. “On Saved looks, I can open what I saved and delete anything I’m done with.”
5. “Refresh — persistence still holds. That’s the portfolio piece.”

---

## Optional extensions

- Rename a look inline on `/looks` (edit-in-place via `saveLook` or a small `updateLook` helper).
- Show piece names/swatches more richly on each saved look card, or deep-link “edit this look” back into the builder with pieces pre-selected.
