import { Component } from "react";
import "../../../styles/OutputPage.css";

class OutputPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { info } = this.props;
    console.log(typeof info);
    return (
      <div className="outputPage">
        <div className="outputPageHeader">
          <h2>{info.generalInfo.name} RESUME</h2>
          <div className="headerInfoSection">
            <p>{info.generalInfo.email}</p>
            <p>{info.generalInfo.phoneNumber}</p>
          </div>
        </div>
        <div className="resumeContainer">
          <div className="educationOutput">
            <h1 className="educationOutputHeader">EDUCATION</h1>
            <h2 id="shoolNameID">{info.educationInfo.schoolName}</h2>
            <h2 id="shoolNameID">{info.educationInfo.major}</h2>
            <h2 id="shoolNameID">
              Completed in {info.educationInfo.completionDate}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default OutputPage;
