// import React, { useState } from "react";
// import axios from "axios";

// export const Post = () => {
//   const [state, setState] = useState({
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     message: "",
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setState((prevState) => ({
//       ...prevState,
//       file: file,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("fullName", state.fullName);
//     formData.append("phoneNumber", state.phoneNumber);
//     formData.append("email", state.email);
//     formData.append("message", state.message);
//     formData.append("file", state.file);

//     axios
//       .post("https://ccse.uicgroup.tech/api/v1/common/appeal/post/", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//       .then((response) => {
//         console.log(response.status, response.data);
//       });
//   };

//   return (
//     <div>
//       <h1>New Post</h1>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="fullName">
//           Name
//           <input
//             type="text"
//             name="fullName"
//             value={state.fullName}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="phoneNumber">
//           Phone Number
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={state.phoneNumber}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="email">
//           Email
//           <input
//             type="email"
//             name="email"
//             value={state.email}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="message">
//           Message
//           <input
//             type="text"
//             name="message"
//             value={state.message}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="file">
//           File
//           <input type="file" name="file" onChange={handleFileChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from "react";

const API_URL = "https://ccse.uicgroup.tech/api/v1/common/appeal/post/"; // Replace with your API endpoint

const Post = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("phone_number", phoneNumber);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("file", file);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Success! Handle the successful submission here
        console.log("Form submitted successfully!");
      } else {
        // Error occurred while submitting the form
        console.log("Form submission failed.");
      }
    } catch (error) {
      console.log("An error occurred during form submission:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Post;
