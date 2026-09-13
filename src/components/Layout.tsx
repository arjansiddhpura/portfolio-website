import { NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { to: "/#work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="page">
      <header className="nav wrap">
        <NavLink to="/" className="logo">
          Anuj Siddhpura
        </NavLink>
        <nav className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div
        key={location.pathname}
        className={
          location.pathname === "/contact" || location.pathname.startsWith("/work/")
            ? "breathe-in"
            : "page-enter"
        }
      >
        <Outlet />
      </div>
      <footer className="footer wrap">
        <NavLink to="/">Anuj Siddhpura</NavLink>
        <nav>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <span className="year">2026</span>
      </footer>
    </div>
  );
}
