import "../../styles/Main.css";
import { Component } from "react";
import InputPage from "./Inputs/InputPage";
import OutputPage from "./Outputs/OutputPage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        name: "name",
        email: "email",
        phoneNumber: "phoneNumber",
      },
      educationInfo: {
        schoolName: "schoolName",
        major: "major",
        completionDate: "compDate",
      },
      experienceInfo: {
        companyName: "compName",
        title: "title",
        mainTasks: "mainTasks",
        startDate: "startDare",
        endDate: "endDate",
      },
    };
    this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    this.updateEducationInfo = this.updateEducationInfo.bind(this);
  }

  updateGeneralInfo(nameValue, emailValue, phoneNumberValue) {
    this.setState((prevState) => ({
      generalInfo: {
        ...prevState.generalInfo,
        name: nameValue,
        email: emailValue,
        phoneNumber: phoneNumberValue,
      },
    }));
  }

  updateEducationInfo(schoolNameValue, majorValue, completionDateValue) {
    this.setState((prevState) => ({
      educationInfo: {
        ...prevState.educationInfo,
        schoolName: schoolNameValue,
        major: majorValue,
        completionDate: completionDateValue,
      },
    }));
  }

  handleSubmit(e) {}

  render() {
    return (
      <div className="main">
        <InputPage
          handleSubmit={this.handleSubmit}
          updateGeneralInfo={this.updateGeneralInfo}
          updateEducationInfo={this.updateEducationInfo}
        />
        <OutputPage info={this.state} />
      </div>
    );
  }
}

export default Main;
