import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ClosetPage } from "./pages/ClosetPage"
import { BuilderPage } from "./pages/BuilderPage"
import { LooksPage } from "./pages/LooksPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClosetPage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/looks" element={<LooksPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
