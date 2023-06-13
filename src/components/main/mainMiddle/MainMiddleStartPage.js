import "./MainMiddleStartPage.css";
import Card from "../../Card";
import Media from "./Media";

function MainMiddleStartPage() {
  return (
    <Card>
      <img
        src="./images/main_image.jpg"
        alt="User"
        className="main-middle-img"
      />
      <div className="main-middle-conteiner">
        <h1 className="main-middle-header">Getting Started</h1>
        <p className="main-middle-parahraph">
          We've listed a couple of steps to help you get set up on Strava.
        </p>
      </div>
      <Media />
      <Media />
    </Card>
  );
}

export default MainMiddleStartPage;
