// In this part, user will fill out the general information regarging them
import { Component } from "react";
import InputField from "./InputField";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      tel: "",
    };
  }

  getInfo = (e, key) => {
    this.setState(
      {
        [key]: e.target.value,
      },
      () => {
        this.props.updateGeneralInfo(
          this.state.name,
          this.state.email,
          this.state.tel
        );
      }
    );
  };

  render() {
    const { name, email, tel } = this.state;
    return (
      <div className="GeneralInfo">
        <h2>General Information</h2>
        <div className="nameSection">
          <InputField
            label="Name: "
            type="text"
            name="nameInput"
            id="nameInput"
            onChange={(e) => this.getInfo(e, "name")}
            value={name}
            placeholder="Your Name"
          />
        </div>
        <div className="emailSection">
          <InputField
            label="Email: "
            type="email"
            name="emailInput"
            id="emailInput"
            onChange={(e) => this.getInfo(e, "email")}
            value={email}
            placeholder="Your Email"
          />
        </div>
        <div className="phoneSection">
          <InputField
            label="Phone Number: "
            type="tel"
            name="phoneInput"
            id="phoneInput"
            onChange={(e) => this.getInfo(e, "tel")}
            value={tel}
            placeholder="Your Phone Number"
          />
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
