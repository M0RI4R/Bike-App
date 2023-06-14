import "./UserProfileGoals.css";
import Card from "../../Card";
import { GiRunningShoe } from "react-icons/gi";
import { GiDutchBike } from "react-icons/gi";
import { BiSwim } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";

function UserProfileGoals() {
  return (
    <Card>
      <ul className="user-goals-list">
        <li className="user-goals-item">
          <GiRunningShoe />{" "}
        </li>
        <li>
          <GiDutchBike />{" "}
        </li>
        <li>
          <BiSwim />
        </li>
      </ul>
      <p className="user-goals-paragraph">
        Subscribe to stay motivated with custom progress, segment and power
        goals.{" "}
        <a href="./" className="user-goals-link">
          Upgrade
        </a>
      </p>
      <div className="user-goals-current-week">
        <h4>THIS WEEK</h4>
        <p>0 mi</p>
      </div>
      <div className="user-goals-current-day">
        <ul className="user-current-day-list">
          <li className="user-current-day-item">M</li>
          <li className="user-current-day-item">T</li>
          <li className="user-current-day-item">W</li>
          <li className="user-current-day-item">T</li>
          <li className="user-current-day-item">F</li>
          <li className="user-current-day-item">S</li>
          <li className="user-current-day-item">S</li>
        </ul>
        <GiRunningShoe />{" "}
      </div>
      <div>
        <ul className="current-achivments">
          <li>0h0m</li>
          <li>0ft</li>
        </ul>
        <div className="this-year-achivments">
          <h4>THIS YEAR</h4>
          <span></span>
          <h5>TODAY</h5>
        </div>
        <div>
          <a href="./" className="manage-goals">
            <p>Menage Your Goals</p>
            <FaChevronRight />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default UserProfileGoals;
