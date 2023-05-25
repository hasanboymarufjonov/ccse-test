import React, { useEffect } from "react";
import axios from "axios";

function NewDetail() {
  useEffect(() => {
    const url = "https://ccse.uicgroup.tech/api/v1/news/new_year/detail/";
    const deviceId = "324124";

    axios
      .get(url, {
        headers: {
          "device-id": deviceId,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div className="App"></div>;
}

export default NewDetail;
