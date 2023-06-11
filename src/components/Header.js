import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <a href="/">
        <span className="Header-logo">ROVER</span>
      </a>
      <nav className="Header-nav">
        <ul className="Header-nav__global">
          <li className="Header-nav__item">
            <a href="/">Dashboard</a>
            <button>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </li>
          <li className="Header-nav__item">
            <a href="/">Training</a>
            <button>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </li>
          <li className="Header-nav__item">
            <a href="/">Explore</a>
            <button>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </li>
          <li className="Header-nav__item">
            <a href="/">Challenges</a>
          </li>
        </ul>
        <ul className="Header-nav__user">
          <li className="Header-nav__item">
            <button type="button" className="">
              Start Trial
            </button>{" "}
          </li>
          <li className="Header-nav__item">
            <a href="/">Bell</a>
          </li>
          <li className="Header-nav__item">
            <a href="/">Img</a>
            <button>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </li>
          <li className="Header-nav__item">
            <a href="/">Upload</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
