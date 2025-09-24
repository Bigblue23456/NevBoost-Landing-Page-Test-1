import { Link, NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `px-2 py-1 rounded-md text-sm ${isActive ? 'font-semibold underline' : 'text-gray-700'}`

export default function Nav() {
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="text-lg font-bold">NevBoost</Link>
        <div className="flex items-center gap-4">
          <NavLink to="/ppf" className={linkClass}>PPF</NavLink>
          <NavLink to="/process" className={linkClass}>Process</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className="btn btn-primary">Book a Call</NavLink>
        </div>
      </nav>
    </header>
  )
}
