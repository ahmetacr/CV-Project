// In this part, user will fill out the general information regarging them
import { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      tel: "",
    };

    this.getName = this.getName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getTel = this.getTel.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getName(e) {
    this.setState(
      {
        name: e.target.value,
      },
      () => {
        this.handleInputChange();
        console.log(`${this.state.name} is the name!`);
      }
    );
  }
  getEmail(e) {
    this.setState(
      {
        email: e.target.value,
      },
      () => {
        this.handleInputChange();
      }
    );
  }
  getTel(e) {
    this.setState(
      {
        tel: e.target.value,
      },
      () => {
        this.handleInputChange();
      }
    );
  }

  handleInputChange() {
    this.props.updateGeneralInfo(
      this.state.name,
      this.state.email,
      this.state.tel
    );
  }

  render() {
    const { name, email, tel } = this.state;
    return (
      <div
        className="GeneralInfo"
        style={{ border: "6px solid black", width: "fit-content" }}
      >
        <h2>General Information</h2>
        <div className="nameSection">
          <label htmlFor="nameInput">Name: </label>
          <input
            type="text"
            name="nameInput"
            id="nameInput"
            onChange={this.getName}
            value={name}
          />
        </div>
        <div className="emailSection">
          <label htmlFor="emailInput">Email: </label>
          <input
            type="email"
            name="emailInput"
            id="emailInput"
            onChange={this.getEmail}
            value={email}
          />
        </div>
        <div className="phoneSection">
          <label htmlFor="phoneInput">Phone Number: </label>
          <input
            type="tel"
            name="phoneInput"
            id="phoneInput"
            onChange={this.getTel}
            value={tel}
          />
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
