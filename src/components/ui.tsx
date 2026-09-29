import { siteConfig } from "../config/site"
import type { WardrobePiece } from "../data/wardrobe"

type PieceCardProps = {
  piece: WardrobePiece
  selected?: boolean
  onSelect?: (piece: WardrobePiece) => void
}

export function PieceCard({ piece, selected, onSelect }: PieceCardProps) {
  return (
    <button
      type="button"
      className={`piece-card ${selected ? "piece-card--selected" : ""}`}
      onClick={() => onSelect?.(piece)}
      aria-pressed={selected}
    >
      <div
        className="piece-card__swatch"
        style={{
          background: `linear-gradient(145deg, ${piece.accent}, ${piece.color})`,
        }}
      />
      <div className="piece-card__meta">
        <p className="piece-card__name">{piece.name}</p>
        <p className="piece-card__cat">{piece.category}</p>
        <div className="piece-card__tags">
          {piece.mood.slice(0, 2).map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </button>
  )
}

export function EmptyState({ message }: { message?: string }) {
  return (
    <div className="empty-state" role="status">
      <div className="empty-state__blob" aria-hidden />
      <p className="empty-state__title">Nothing here yet</p>
      <p className="empty-state__copy">
        {message ?? siteConfig.mascots.empty}
      </p>
    </div>
  )
}

export function LoadingState() {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <div className="loading-state__hanger" aria-hidden />
      <p>{siteConfig.mascots.loading}</p>
    </div>
  )
}
