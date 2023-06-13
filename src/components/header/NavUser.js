import { FaBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import "./NavUser.css";
import Button from "../buttons/Button";

function NavUser(props) {
  return (
    <ul className="nav-user">
      <li className="nav-user__item">
        <Button>Start Trial</Button>
      </li>
      <li className="nav-user__item">
        <a href="/" className="nav-user__link">
          <FaBell title="notification" className="nav-user__bell" />
        </a>
      </li>
      <li className="nav-user__item">
        <a href="/" className="nav-user__link">
          <img
            className="nav-user__img"
            src={props.img}
            alt="User"
            width={32}
            height={32}
          />
          <FaChevronDown />
        </a>
      </li>
      <li className="nav-user__item">
        <a href="/" className="nav-user__link">
          <FaPlusCircle title="upload" className="nav-user__upload" />
        </a>
      </li>
    </ul>
  );
}

export default NavUser;
