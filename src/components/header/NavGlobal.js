import { FaChevronDown } from "react-icons/fa";
import "./NavGlobal.css";

function NavGlobal() {
  return (
    <>
      <ul className="nav-global">
        <li className="nav-global__item">
          <a href="/" className="nav-global__link">
            Dashboard
          </a>
          <FaChevronDown />
        </li>
        <li className="nav-global__item">
          <a href="/" className="nav-global__link">
            Training
          </a>
          <FaChevronDown />
        </li>
        <li className="nav-global__item">
          <a href="/" className="nav-global__link">
            Explore
          </a>

          <FaChevronDown />
        </li>
        <li className="nav-global__item">
          <a href="/" className="nav-global__link">
            Challenges
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavGlobal;
