import React from "react";

import { useState } from "react";
import axios from "axios";

export const Post = () => {
  const [state, setState] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
    file: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullName: state.fullName,
      phoneNumber: state.phoneNumber,
      email: state.email,
      message: state.message,
      file: state.file,
    };
    axios
      .post("https://ccse.uicgroup.tech/api/v1/common/appeal/post/", userData)
      .then((response) => {
        console.log(response.status, response.data);
      });
  };
  return (
    <div>
      <h1>Register or Create new account</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="fullName"
            value={state.fullName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="number">
          Phone Number
          <input
            type="tel"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="number">
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="number">
          Message
          <input
            type="text"
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="file">
          Message
          <input
            type="file"
            name="file"
            value={state.file}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
