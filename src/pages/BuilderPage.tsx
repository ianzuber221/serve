/**
 * YOUR FEATURE — Outfit Builder
 *
 * Full checklist: YOUR_FEATURE.md (steps 1–5).
 * Search this file (and looksStorage / LooksPage) for TODO(your-name).
 */

import { useMemo, useState } from "react"
import { AppNav } from "../components/AppNav"
import { EmptyState, PieceCard } from "../components/ui"
import { siteConfig } from "../config/site"
import { MOODS, wardrobeSeed, type Mood, type WardrobePiece } from "../data/wardrobe"
import { saveLook } from "../lib/looksStorage"

export function BuilderPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [mood, setMood] = useState<Mood | "all">("all")
  const [lookName, setLookName] = useState("")
  const [status, setStatus] = useState<string | null>(null)

  // TODO(your-name): Step 1 — also filter by occasion (piece.occasions). Mood filter below is a starter.
  const filtered = useMemo(() => {
    if (mood === "all") return wardrobeSeed
    return wardrobeSeed.filter((p) => p.mood.includes(mood))
  }, [mood])

  function togglePiece(piece: WardrobePiece) {
    // TODO(your-name): Step 2 — when adding, drop any selected piece with the same category.
    setSelectedIds((prev) =>
      prev.includes(piece.id)
        ? prev.filter((id) => id !== piece.id)
        : [...prev, piece.id],
    )
  }

  function handleSave() {
    // TODO(your-name): Step 3 — tighten validation/messages; optionally navigate to /looks after saveLook.
    if (!lookName.trim() || selectedIds.length < 2) {
      setStatus("Name your look and pick at least two pieces.")
      return
    }

    saveLook({
      id: crypto.randomUUID(),
      name: lookName.trim(),
      pieceIds: selectedIds,
      mood: mood === "all" ? "soft" : mood,
      createdAt: new Date().toISOString(),
    })
    setStatus(`Saved “${lookName.trim()}” — check Saved looks.`)
    setLookName("")
    setSelectedIds([])
  }

  const selected = wardrobeSeed.filter((p) => selectedIds.includes(p.id))

  return (
    <div className="page">
      <AppNav />
      <section className="section builder-section">
        <div className="section__head">
          <p className="eyebrow">{siteConfig.name}</p>
          <h1>Outfit builder</h1>
          <p>
            Combine pieces into a look you&apos;d actually wear. Persist to
            localStorage when you&apos;re ready.
          </p>
        </div>

        <div className="builder-layout">
          <aside className="builder-draft">
            <h2>Draft look</h2>
            {selected.length === 0 ? (
              <EmptyState message="Tap pieces on the right to start styling." />
            ) : (
              <ul className="draft-list">
                {selected.map((p) => (
                  <li key={p.id}>
                    <span
                      className="draft-dot"
                      style={{ background: p.color }}
                    />
                    {p.name}
                  </li>
                ))}
              </ul>
            )}

            <label className="field">
              <span>Look name</span>
              <input
                value={lookName}
                onChange={(e) => setLookName(e.target.value)}
                placeholder="e.g. Soft market run"
              />
            </label>

            <button type="button" className="btn btn--primary" onClick={handleSave}>
              Save look
            </button>
            {status && <p className="status-msg">{status}</p>}

            <div className="todo-callout">
              <strong>Your feature</strong>
              <p>
                Follow <code>YOUR_FEATURE.md</code> steps 1–5. Search{" "}
                <code>TODO(your-name)</code> for the exact spots.
              </p>
            </div>
          </aside>

          <div className="builder-picker">
            <div className="filter-row">
              <button
                type="button"
                className={mood === "all" ? "chip chip--active" : "chip"}
                onClick={() => setMood("all")}
              >
                Any mood
              </button>
              {MOODS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={mood === m.id ? "chip chip--active" : "chip"}
                  onClick={() => setMood(m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* TODO(your-name): Step 1 — add occasion filter chips here (reuse .chip styles). */}
            <div className="piece-grid">
              {filtered.map((piece) => (
                <PieceCard
                  key={piece.id}
                  piece={piece}
                  selected={selectedIds.includes(piece.id)}
                  onSelect={togglePiece}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
