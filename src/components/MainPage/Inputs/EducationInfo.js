// This section will have the user's education background
import { Component } from "react";

class EducationInfo extends Component {
  render() {
    return (
      <div
        className="EducationInfo"
        style={{ border: "6px solid black", width: "fit-content" }}
      >
        <h2>Education Information</h2>
        <div className="schoolNameSection">
          <label htmlFor="schoolNameInput">School Name: </label>
          <input type="text" name="schoolNameInput" id="schoolNameInput" />
        </div>
        <div className="majorSection">
          <label htmlFor="majorInput">Major : </label>
          <input type="text" name="majorInput" id="majorInput" />
        </div>
        <div className="completionDateSection">
          <label htmlFor="completionDateInput">Completion Date : </label>
          <input
            type="date"
            name="completionDateInput"
            id="completionDateInput"
          />
        </div>
        <button className="addEducationBtn">ADD</button>
      </div>
    );
  }
}

export default EducationInfo;
