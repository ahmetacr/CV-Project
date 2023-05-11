// In this part, user will fill out the general information regarging them
import { Component } from "react";
import InputField from "./InputField";

class ExperienceInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      title: "",
      mainTasks: "",
      startDate: "",
      endDate: "",
    };
  }

  getInfo = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  addExperienceInfo = (e) => {
    e.preventDefault();
    const experienceInfoObj = this.state;
    this.props.updateExperienceInfo(experienceInfoObj);

    this.setState({
      companyName: "",
      title: "",
      mainTasks: "",
      startDate: "",
      endDate: "",
    });
  };

  render() {
    const { companyName, title, mainTasks, startDate, endDate } = this.state;

    return (
      <div className="ExperienceInfo">
        <h2>Experience Information</h2>
        <div className="companyNameSection">
          <InputField
            label="Company Name:"
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => this.getInfo(e, "companyName")}
          />
        </div>
        <div className="titleSection">
          <InputField
            label="Title: "
            type="text"
            id="titleInput"
            placeholder="Job Title"
            onChange={(e) => this.getInfo(e, "title")}
            value={title}
          />
        </div>
        <div className="mainTasksSection">
          <InputField
            label="Main Tasks: "
            name="mainTasksInput"
            id="mainTasksInput"
            type="text"
            onChange={(e) => this.getInfo(e, "mainTasks")}
            value={mainTasks}
          />
        </div>
        <div className="startDateSection">
          <InputField
            label="Start Date: "
            type="date"
            name="startDateInput"
            id="startDateInput"
            onChange={(e) => this.getInfo(e, "startDate")}
            value={startDate}
          />
        </div>
        <div className="endDateSection">
          <InputField
            label="End Date: "
            type="date"
            name="endDateInput"
            id="endDateInput"
            onChange={(e) => this.getInfo(e, "endDate")}
            value={endDate}
          />
        </div>
        <button
          className="addBtn addExperienceBtn"
          onClick={this.addExperienceInfo}
        >
          ADD
        </button>
      </div>
    );
  }
}

export default ExperienceInfo;
