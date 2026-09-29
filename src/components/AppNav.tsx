import { Link, NavLink } from "react-router-dom"
import { siteConfig } from "../config/site"

export function AppNav() {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand">
        {siteConfig.name}
      </Link>
      <nav className="nav__links" aria-label="Primary">
        <NavLink to="/" end>
          Closet
        </NavLink>
        <NavLink to="/builder">Outfit builder</NavLink>
        <NavLink to="/looks">Saved looks</NavLink>
      </nav>
    </header>
  )
}
