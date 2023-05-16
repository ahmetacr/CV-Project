import "../../styles/Main.css";
import React, { useEffect, useState } from "react";
import InputPage from "./Inputs/InputPage";
import OutputPage from "./Outputs/OutputPage";

const Main = (props) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "name",
    email: "email",
    phoneNumber: "phoneNumber",
  });

  const [educationInfoArr, setEducationInfoArr] = useState([]);
  const [experienceInfoArr, setexperienceInfoArr] = useState([]);

  const updateGeneralInfo = (nameValue, emailValue, phoneNumberValue) => {
    setGeneralInfo({
      name: nameValue,
      email: emailValue,
      phoneNumber: phoneNumberValue,
    });
  };

  const updateExperienceInfo = (experienceInfoObj) => {
    setEducationInfoArr([...experienceInfoArr, experienceInfoObj]);
  };

  const updateEducationInfo = (educationInfoObj) => {
    setexperienceInfoArr([...educationInfoArr, educationInfoObj]);
  };

  return (
    <div className="main">
      <InputPage
        // handleSubmit={handleSubmit}
        updateGeneralInfo={updateGeneralInfo}
        updateEducationInfo={updateEducationInfo}
        updateExperienceInfo={updateExperienceInfo}
      />
      <OutputPage
        info={{
          generalInfo: generalInfo,
          educationInfoArr: educationInfoArr,
          experienceInfoArr: experienceInfoArr,
        }}
      />
    </div>
  );
};

class Main1 extends React.Component {
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
