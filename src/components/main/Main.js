import "./Main.css";
import MainLeft from "./MainLeft";
import MainMiddle from "./MainMiddle";
import MainRight from "./MainRight";

function Main(props) {
  return (
    <div className="main-conteiner">
      <MainLeft img={props.img} />
      <MainMiddle />
      <MainRight />
    </div>
  );
}

export default Main;
