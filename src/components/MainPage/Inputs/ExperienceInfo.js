// In this part, user will fill out the general information regarging them
import React, { useState } from "react";
import InputField from "./InputField";

const ExperienceInfo = (props) => {
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [mainTasks, setMainTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMainTasksChange = (e) => {
    setMainTasks(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const addExperienceInfo = (e) => {
    e.preventDefault();
    const experienceInfoObj = {
      companyName,
      title,
      mainTasks,
      startDate,
      endDate,
    };
    props.updateExperienceInfo(experienceInfoObj);

    setCompanyName("");
    setTitle("");
    setMainTasks("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="ExperienceInfo">
      <h2>Experience Information</h2>
      <div className="companyNameSection">
        <InputField
          label="Company Name:"
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={handleCompanyNameChange}
        />
      </div>
      <div className="titleSection">
        <InputField
          label="Title: "
          type="text"
          id="titleInput"
          placeholder="Job Title"
          onChange={handleTitleChange}
          value={title}
        />
      </div>
      <div className="mainTasksSection">
        <InputField
          label="Main Tasks: "
          name="mainTasksInput"
          id="mainTasksInput"
          type="text"
          onChange={handleMainTasksChange}
          value={mainTasks}
        />
      </div>
      <div className="startDateSection">
        <InputField
          label="Start Date: "
          type="date"
          name="startDateInput"
          id="startDateInput"
          onChange={handleStartDateChange}
          value={startDate}
        />
      </div>
      <div className="endDateSection">
        <InputField
          label="End Date: "
          type="date"
          name="endDateInput"
          id="endDateInput"
          onChange={handleEndDateChange}
          value={endDate}
        />
      </div>
      <button className="addBtn addExperienceBtn" onClick={addExperienceInfo}>
        ADD
      </button>
    </div>
  );
};

export default ExperienceInfo;
