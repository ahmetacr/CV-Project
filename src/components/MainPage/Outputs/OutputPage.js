import { Component } from "react";
import "../../../styles/OutputPage.css";

class OutputPage extends Component {
  render() {
    const { info } = this.props;
    return (
      <div className="outputPage">
        <div className="outputPageHeader">
          <h2>{info.generalInfo.name} Resume</h2>
          <div className="headerInfoSection">
            <p>{info.generalInfo.email}</p>
            <p>{info.generalInfo.phoneNumber}</p>
          </div>
        </div>
        <div className="resumeContainer">
          <section>
            {info.educationInfoArr.map((item, index) => (
              <div key={index} className="educationOutput">
                <h2 id="shoolNameID">{item.schoolName}</h2>
                <h2 id="majorID">{item.major}</h2>
                <h2 id="completionDateID">Graduated: {item.completionDate}</h2>
              </div>
            ))}
            {info.experienceInfoArr.map((item, index) => (
              <div key={index} className="experienceOutput">
                <h1 className="experienceOutputHeader">Experience</h1>
                <h2 id="companyNameID">{item.companyName}</h2>
                <h2 id="titleID">{item.title}</h2>
                <h2 id="mainTasksID">{item.mainTasks}</h2>
                <h2 id="startDateID">Worked from: {item.startDate}</h2>
                <h2 id="endDateID">Worked to: {item.endDate}</h2>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default OutputPage;
