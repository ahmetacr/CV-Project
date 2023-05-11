// This section will have the user's education background
import { Component } from "react";
import InputField from "./InputField";

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      major: "",
      completionDate: "",
    };
  }

  getInfo = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  addEducationInfo = (e) => {
    const educationInfoObj = this.state;
    this.props.updateEducationInfo(educationInfoObj);

    // Reset the state to clear the input fields
    this.setState({
      schoolName: "",
      major: "",
      completionDate: "",
    });
  };

  render() {
    const { schoolName, major, completionDate } = this.state;

    return (
      <div className="EducationInfo">
        <h2>Education Information</h2>
        <div className="schoolNameSection">
          <InputField
            label="School Name: "
            type="text"
            name="schoolNameInput"
            id="schoolNameInput"
            value={schoolName}
            onChange={(e) => this.getInfo(e, "schoolName")}
            placeholder="Your School's Name"
          />
        </div>
        <div className="majorSection">
          <InputField
            label="Major: "
            type="text"
            name="majorInput"
            id="majorInput"
            value={major}
            onChange={(e) => this.getInfo(e, "major")}
            placeholder="Your Major"
          />
        </div>
        <div className="completionDateSection">
          <InputField
            label="Completion Date: "
            type="date"
            name="completionDateInput"
            id="completionDateInput"
            value={completionDate}
            onChange={(e) => this.getInfo(e, "completionDate")}
          />
        </div>
        <button
          className="addBtn addEducationBtn"
          onClick={this.addEducationInfo}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default EducationInfo;
