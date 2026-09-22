import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="navbar">
      <Logo />
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <Link className="nav-signin" to="/signin">Sign in</Link>
        <Link className="button button-small" to="/signup">Get started</Link>
      </nav>
    </header>
  );
}
