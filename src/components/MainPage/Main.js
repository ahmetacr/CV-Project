import "../../styles/Main.css";
import { Component } from "react";
import InputPage from "./Inputs/InputPage";
import OutputPage from "./Outputs/OutputPage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phoneNumber: "",
      },
      educationInfoArr: [],
      experienceInfoArr: [],
    };
  }

  updateGeneralInfo = (nameValue, emailValue, phoneNumberValue) => {
    // call like an obj
    this.setState((prevState) => ({
      generalInfo: {
        ...prevState.generalInfo,
        name: nameValue,
        email: emailValue,
        phoneNumber: phoneNumberValue,
      },
    }));
  };

  updateEducationInfo = (educationInfoObj) => {
    this.setState((prevState) => ({
      educationInfoArr: [...prevState.educationInfoArr, educationInfoObj],
    }));
  };

  updateExperienceInfo = (experienceInfoObj) => {
    this.setState((prevState) => ({
      experienceInfoArr: [...prevState.experienceInfoArr, experienceInfoObj],
    }));
  };

  render() {
    return (
      <div className="main">
        <InputPage
          handleSubmit={this.handleSubmit}
          updateGeneralInfo={this.updateGeneralInfo}
          updateEducationInfo={this.updateEducationInfo}
          updateExperienceInfo={this.updateExperienceInfo}
        />
        <OutputPage info={this.state} />
      </div>
    );
  }
}

export default Main;
