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

  getSchoolName = (e) => {
    this.setState({
      schoolName: e.target.value,
    });
  };

  getMajor = (e) => {
    this.setState({
      major: e.target.value,
    });
  };

  getCompletionDate = (e) => {
    this.setState({
      completionDate: e.target.value,
    });
  };

  addEducationInfo = (e) => {
    e.preventDefault();
    const educationInfoObj = this.state;
    this.props.updateEducationInfo(educationInfoObj);
  };

  render() {
    const { schoolName, major, completionDate } = this.state;

    return (
      <form onSubmit={this.addEducationInfo}>
        <div className="EducationInfo">
          <h2>Education Information</h2>
          <div className="schoolNameSection">
            <InputField
              label="School Name: "
              type="text"
              name="schoolNameInput"
              id="schoolNameInput"
              value={schoolName}
              onChange={this.getSchoolName}
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
              onChange={this.getMajor}
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
              onChange={this.getCompletionDate}
            />
          </div>
          <button
            className="addBtn addEducationBtn"
            onClick={this.addEducationInfo}
          >
            ADD
          </button>
        </div>
      </form>
    );
  }
}

export default EducationInfo;
