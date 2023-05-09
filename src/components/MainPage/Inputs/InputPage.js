import { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";
import "../../../styles/InputPage.css";

class InputPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <form className="inputPageForm">
          <GeneralInfo updateGeneralInfo={this.props.updateGeneralInfo} />
          <EducationInfo updateEducationInfo={this.props.updateEducationInfo} />
          <ExperienceInfo />
          {/* <button type="submit"> SUBMIT </button> */}
        </form>
      </>
    );
  }
}

export default InputPage;
