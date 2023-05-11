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
          <GeneralInfo updateGeneralInfo={this.props.updateGeneralInfo} />
          <EducationInfo updateEducationInfo={this.props.updateEducationInfo} />
          <ExperienceInfo
            updateExperienceInfo={this.props.updateExperienceInfo}
          />
        </form>
      </>
    );
  }
}

export default InputPage;
