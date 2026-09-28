import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
        <Link className="navbar-logo" to="/">
            Thea og Synne sitt kollektiv🩷
        </Link>

        <div className="navbar-links">
            <Link to="/">Hjem</Link>
            <Link to="/shoppinglist">Handleliste</Link>
        </div>
    </nav>
    );
}

export default NavBar;