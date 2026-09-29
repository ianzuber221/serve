import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AppNav } from "../components/AppNav"
import { EmptyState, LoadingState } from "../components/ui"
import { siteConfig } from "../config/site"
import { wardrobeSeed } from "../data/wardrobe"
import { loadLooks, type SavedLook } from "../lib/looksStorage"

export function LooksPage() {
  const [loading, setLoading] = useState(true)
  const [looks, setLooks] = useState<SavedLook[]>([])

  useEffect(() => {
    const t = window.setTimeout(() => {
      // TODO(your-name): Step 5 — ensure this re-runs after builder saves (navigate here or remount).
      setLooks(loadLooks())
      setLoading(false)
    }, 300)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="page">
      <AppNav />
      <section className="section">
        <div className="section__head">
          <p className="eyebrow">{siteConfig.name}</p>
          <h1>Saved looks</h1>
          <p>Looks you save from the builder will land here.</p>
        </div>

        {loading ? (
          <LoadingState />
        ) : looks.length === 0 ? (
          <EmptyState message="No looks yet — Poppy is holding hangers open for you." />
        ) : (
          <div className="looks-grid">
            {looks.map((look) => {
              const pieces = wardrobeSeed.filter((p) =>
                look.pieceIds.includes(p.id),
              )
              return (
                <article key={look.id} className="look-card">
                  <div className="look-card__swatches">
                    {pieces.map((p) => (
                      <span
                        key={p.id}
                        style={{ background: p.color }}
                        title={p.name}
                      />
                    ))}
                  </div>
                  <h2>{look.name}</h2>
                  <p>
                    {look.mood} · {pieces.length} pieces
                  </p>
                  {/* TODO(your-name): Step 4 — Delete button → deleteLook(look.id) → setLooks(loadLooks()). */}
                </article>
              )
            })}
          </div>
        )}

        <Link className="btn btn--primary" to="/builder">
          Build another look
        </Link>
      </section>
    </div>
  )
}
