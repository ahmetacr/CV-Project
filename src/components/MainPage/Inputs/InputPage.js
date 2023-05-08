import { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";
import "../../../styles/InputPage.css";

class InputPage extends Component {
  render() {
    return (
      <>
        <form className="inputPageForm">
          <GeneralInfo />
          <EducationInfo />
          <ExperienceInfo />
        </form>
      </>
    );
  }
}

export default InputPage;
