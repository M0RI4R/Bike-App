import "./UserProfileDetails.css";
import Card from "../../Card";
import { FaChevronRight } from "react-icons/fa";

function UserProfileDetails(props) {
  return (
    <Card className="user-profile-details">
      <img className="user-profile-details-img" src={props.img} alt="User" />
      <div className="user-profile-info">
        <h2 className="user-profile-header">Michał Steć</h2>
        <ul className="user-profile-list">
          <li className="user-profile-item">
            <p>Following</p>
            <span>0</span>
          </li>
          <li className="user-profile-item">
            <p>Followers</p>
            <p>0</p>
          </li>
          <li className="user-profile-item">
            <p>Activities</p>
            <p>0</p>
          </li>
        </ul>
      </div>
      <div className="link-conteiner">
        <a href="./">
          <span className="link-link">Add an Activity.</span> Learn how to
          record or upload an activity on Starva
        </a>
        <FaChevronRight />
      </div>
    </Card>
  );
}

export default UserProfileDetails;
