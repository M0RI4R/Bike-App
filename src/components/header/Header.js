import "./Header.css";
import NavGlobal from "./NavGlobal";
import NavUser from "./NavUser";
import { FaSistrix } from "react-icons/fa";

function Header() {
  return (
    <div className="Header">
      <a href="/" className="Header-link">
        <span className="Header-logo">ROVER</span>
      </a>
      <button type="button" className="Header-search__conteiner">
        <FaSistrix className="Header-FaSistrix" />
      </button>
      <nav className="Header-nav">
        <NavGlobal />
        <NavUser />
      </nav>
    </div>
  );
}

export default Header;
