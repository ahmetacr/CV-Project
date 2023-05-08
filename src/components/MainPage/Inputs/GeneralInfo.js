// In this part, user will fill out the general information regarging them
import { Component } from "react";

class GeneralInfo extends Component {
  render() {
    return (
      <div
        className="GeneralInfo"
        style={{ border: "6px solid black", width: "fit-content" }}
      >
        <h2>General Information</h2>
        <div className="nameSection">
          <label htmlFor="nameInput">Name: </label>
          <input type="text" name="nameInput" id="nameInput" />
        </div>
        <div className="emailSection">
          <label htmlFor="emailInput">Email: </label>
          <input type="email" name="emailInput" id="emailInput" />
        </div>
        <div className="phone">
          <label htmlFor="phoneInput">Phone Number: </label>
          <input type="tel" name="phoneInput" id="phoneInput" />
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
