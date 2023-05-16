import React from "react";
import "../../../styles/OutputPage.css";

const OutputPage = (props) => {
  const info = props.info;
  return (
    <div className="outputPage">
      <div className="outputPageHeader">
        <h2>{info.generalInfo.name}</h2>
        <div className="headerInfoSection">
          <p>{info.generalInfo.email}</p>
          <p>{info.generalInfo.phoneNumber}</p>
        </div>
      </div>
      <div className="resumeContainer">
        <section>
          <h1 className="sectionTitle">Education</h1>
          {info.educationInfoArr.map((item, index) => (
            <div key={index} className="educationOutput item">
              <div className="educationContainer">
                <h3>{item.schoolName}</h3>
                <h4>{item.major}</h4>
              </div>
              <p>Graduated: {item.completionDate}</p>
            </div>
          ))}
          <h1 className="sectionTitle">Experience</h1>
          {info.experienceInfoArr.map((item, index) => (
            <div key={index} className="experienceOutput item">
              <div className="experienceContainer">
                <h3>{item.companyName}</h3>
                <h4>{item.title}</h4>
              </div>
              <p>Main tasks: {item.mainTasks}</p>
              <p>
                Worked from: {item.startDate} to: {item.endDate}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OutputPage;
