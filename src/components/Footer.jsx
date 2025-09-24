import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-gray-600">
        © {year} NevBoost • <Link to="/legal/privacy" className="underline">Privacy</Link> • <Link to="/legal/terms" className="underline">Terms</Link>
      </div>
    </footer>
  )
}
