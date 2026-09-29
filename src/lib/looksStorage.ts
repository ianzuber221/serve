import type { Mood } from "../data/wardrobe"

export type SavedLook = {
  id: string
  name: string
  pieceIds: string[]
  mood: Mood
  createdAt: string
}

const STORAGE_KEY = "serve-saved-looks"

export function loadLooks(): SavedLook[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as SavedLook[]
  } catch {
    return []
  }
}

export function saveLook(look: SavedLook): void {
  // TODO(your-name): Step 3 — handle duplicate names and/or a max look count before writing.
  const existing = loadLooks()
  localStorage.setItem(STORAGE_KEY, JSON.stringify([look, ...existing]))
}

export function deleteLook(_id: string): void {
  // TODO(your-name): Step 4 — filter out id, write JSON back to STORAGE_KEY (see loadLooks/saveLook).
  throw new Error("Not implemented — deleteLook is YOUR_FEATURE.md step 4")
}
