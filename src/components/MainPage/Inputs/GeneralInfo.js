/* eslint-disable react-hooks/exhaustive-deps */
// In this part, user will fill out the general information regarging them
import React, { useState, useEffect } from "react";
import InputField from "./InputField";

const GeneralInfo = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const getInfo = (e, key) => {
    const value = e.target.value;
    switch (key) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "tel":
        setTel(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    props.updateGeneralInfo(name, email, tel);
  }, [name, email, tel]);

  return (
    <div className="GeneralInfo">
      <h2>General Information</h2>
      <div className="nameSection">
        <InputField
          label="Name: "
          type="text"
          name="nameInput"
          id="nameInput"
          onChange={(e) => getInfo(e, "name")}
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
          onChange={(e) => getInfo(e, "email")}
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
          onChange={(e) => getInfo(e, "tel")}
          value={tel}
          placeholder="Your Phone Number"
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
