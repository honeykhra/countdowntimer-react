import Countdown from "./components/Countdown";
import "./App.css";
import back from "./images/bg-stars.svg";
import bottomImg from "./images/pattern-hills.svg";
import Icons from "./components/Icons";

export default function App() {
  return (
    <div className="app">
      <img className="stars" src={back} alt="stars" />
      <div className="content">
        <Countdown />
        <Icons />
      </div>
      <div className="hillscontainer">
        <img className="hills" src={bottomImg} alt="hills" />
      </div>
    </div>
  );
}
