import React, { useEffect } from "react";
import axios from "axios";

function About() {
  useEffect(() => {
    const url = "https://ccse.uicgroup.tech/api/v1/common/about/";

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div className="App"></div>;
}

export default About;
