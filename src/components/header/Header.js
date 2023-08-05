import { Link } from "react-router-dom";
import northLogo from "./NorthAerospaceLogoSmall.png";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid container">
        <Link to="/" className="navbar-brand">
          <img src={northLogo} className="d-inline-block align-text-top" />
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/opps" className="nav-link">
                Opps
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
