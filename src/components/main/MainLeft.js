import "./MainLeft.css";
import UserProfileDetails from "./mainLeft/UserProfileDetails";
import UserProfileGoals from "./mainLeft/UserProfileGoals";

function MainLeft(props) {
  return (
    <div>
      <UserProfileDetails img={props.img} />
      <UserProfileGoals />
    </div>
  );
}

export default MainLeft;
