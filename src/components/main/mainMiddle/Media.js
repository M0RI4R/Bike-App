import "./Media.css";
import Button from "../../buttons/Button";

function Media() {
  return (
    <div className="media-conteiner">
      <div>
        <img
          src="./images/record_badge.svg"
          alt="Media"
          className="media-img"
        />{" "}
      </div>
      <div className="media-text-content">
        <h3 className="media-header">Record your first activity</h3>
        <p className="media-paragraph">
          Set up your GPS device and seamlessly upload your workouts right to
          Strava. No device? No problem - record and connect anytime, anywhere
          with our mobile app.
        </p>
        <Button>Connect Device</Button>
      </div>
    </div>
  );
}

export default Media;
