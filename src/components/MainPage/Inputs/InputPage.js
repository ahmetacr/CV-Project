import { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";
import "../../../styles/InputPage.css";

const InputPage = (props) => {
  return (
    <>
      <form className="inputPageForm">
        <GeneralInfo updateGeneralInfo={props.updateGeneralInfo} />
        <EducationInfo updateEducationInfo={props.updateEducationInfo} />
        <ExperienceInfo updateExperienceInfo={props.updateExperienceInfo} />
      </form>
    </>
  );
};

export default InputPage;
