import "../../styles/Main.css";
import { Component } from "react";
import InputPage from "./Inputs/InputPage";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <InputPage />
      </div>
    );
  }
}

export default Main;
