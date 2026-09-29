import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AppNav } from "../components/AppNav"
import { EmptyState, LoadingState, PieceCard } from "../components/ui"
import { siteConfig } from "../config/site"
import {
  CATEGORIES,
  type ClothingCategory,
  wardrobeSeed,
  type WardrobePiece,
} from "../data/wardrobe"

export function ClosetPage() {
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<ClothingCategory | "all">("all")
  const [pieces, setPieces] = useState<WardrobePiece[]>([])

  useEffect(() => {
    const t = window.setTimeout(() => {
      setPieces(wardrobeSeed)
      setLoading(false)
    }, 450)
    return () => window.clearTimeout(t)
  }, [])

  const visible =
    filter === "all" ? pieces : pieces.filter((p) => p.category === filter)

  return (
    <div className="page">
      <AppNav />
      <section className="hero hero--closet">
        <div className="hero__atmosphere" aria-hidden />
        <p className="hero__brand">{siteConfig.name}</p>
        <h1 className="hero__headline">{siteConfig.tagline}</h1>
        <p className="hero__support">{siteConfig.description}</p>
        <div className="hero__cta">
          <Link className="btn btn--primary" to="/builder">
            Start a look
          </Link>
          <Link className="btn btn--ghost" to="/looks">
            Saved looks
          </Link>
        </div>
      </section>

      <section className="section closet-section">
        <div className="section__head">
          <h2>Wardrobe</h2>
          <p>Seed pieces so the closet feels lived-in while you build features.</p>
        </div>

        <div className="filter-row" role="tablist" aria-label="Category filters">
          <button
            type="button"
            className={filter === "all" ? "chip chip--active" : "chip"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={filter === cat ? "chip chip--active" : "chip"}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <LoadingState />
        ) : visible.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="piece-grid">
            {visible.map((piece) => (
              <PieceCard key={piece.id} piece={piece} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
