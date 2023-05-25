import React, { useState } from "react";
import axios from "axios";

export const Post = () => {
  const [state, setState] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setState((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", state.fullName);
    formData.append("phoneNumber", state.phoneNumber);
    formData.append("email", state.email);
    formData.append("message", state.message);
    formData.append("file", state.file);

    axios
      .post("https://ccse.uicgroup.tech/api/v1/common/appeal/post/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.status, response.data);
      });
  };

  return (
    <div>
      <h1>New Post</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">
          Name
          <input
            type="text"
            name="fullName"
            value={state.fullName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number
          <input
            type="tel"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message">
          Message
          <input
            type="text"
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="file">
          File
          <input type="file" name="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
