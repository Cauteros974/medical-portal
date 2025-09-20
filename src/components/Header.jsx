import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <NavLink to="/" className="header-logo">MedPortal</NavLink>
    <nav className="header-nav">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/doctors">Doctors</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile">Personal Cabinet</NavLink>
    </nav>
  </header>
);

export default Header;