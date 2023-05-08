// In this part, user will fill out the general information regarging them
import { Component } from "react";

class ExperienceInfo extends Component {
  render() {
    return (
      <div
        className="ExperienceInfo"
        style={{ border: "6px solid black", width: "fit-content" }}
      >
        <h2>Experience Information</h2>
        <div className="companyNameSection">
          <label htmlFor="companyNameInput">Company Name: </label>
          <input type="text" name="companyNameInput" id="companyNameInput" />
        </div>
        <div className="titleSection">
          <label htmlFor="titleInput">Title: </label>
          <input type="text" name="titleInput" id="titleInput" />
        </div>
        <div className="mainTasksSection">
          <label htmlFor="mainTasksInput">Main Tasks: </label>
          <input type="text" name="mainTasksInput" id="mainTasksInput" />
        </div>
        <div className="startDateSection">
          <label htmlFor="startDateInput">Start Date: </label>
          <input type="date" name="startDateInput" id="startDateInput" />
        </div>
        <div className="endDateSection">
          <label htmlFor="endDateInput">End Date: </label>
          <input type="date" name="endDateInput" id="endDateInput" />
        </div>
        <button className="addExperienceBtn">ADD</button>
      </div>
    );
  }
}

export default ExperienceInfo;
