import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const user = [
    {
      id: 1,
      name: "Michał Steć",
      img: "./images/user.jpg",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Header img={user[0].img} />
      </header>

      <Main img={user[0].img} />
    </div>
  );
}

export default App;
