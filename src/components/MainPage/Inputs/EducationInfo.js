// This section will have the user's education background
import { Component } from "react";

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      major: "",
      completionDate: "",
    };
  }

  getSchoolName = (e) => {
    this.setState(
      {
        schoolName: e.target.value,
      },
      () => {
        this.handleInputChange();
      }
    );
  };

  getMajor = (e) => {
    this.setState(
      {
        major: e.target.value,
      },
      () => {
        this.handleInputChange();
      }
    );
  };

  getCompletionDate = (e) => {
    this.setState(
      {
        completionDate: e.target.value,
      },
      () => {
        this.handleInputChange();
      }
    );
  };

  handleInputChange = () => {
    this.props.updateEducationInfo(
      this.state.schoolName,
      this.state.major,
      this.state.completionDate
    );
  };

  render() {
    const { schoolName, major, completionDate } = this.state;

    return (
      <div
        className="EducationInfo"
        style={{ border: "6px solid black", width: "fit-content" }}
      >
        <h2>Education Information</h2>
        <div className="schoolNameSection">
          <label htmlFor="schoolNameInput">School Name: </label>
          <input
            type="text"
            name="schoolNameInput"
            id="schoolNameInput"
            value={schoolName}
            onChange={this.getSchoolName}
          />
        </div>
        <div className="majorSection">
          <label htmlFor="majorInput">Major : </label>
          <input
            type="text"
            name="majorInput"
            id="majorInput"
            value={major}
            onChange={this.getMajor}
          />
        </div>
        <div className="completionDateSection">
          <label htmlFor="completionDateInput">Completion Date : </label>
          <input
            type="date"
            name="completionDateInput"
            id="completionDateInput"
            value={completionDate}
            onChange={this.getCompletionDate}
          />
        </div>
        <button className="addEducationBtn">ADD</button>
      </div>
    );
  }
}

export default EducationInfo;
