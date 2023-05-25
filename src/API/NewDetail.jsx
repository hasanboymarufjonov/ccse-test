import React, { useEffect, useState } from "react";
import axios from "axios";

function NewDetail() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = "https://ccse.uicgroup.tech/api/v1/news/new_year/detail/";
    const deviceId = generateRandomString();
    console.log(deviceId);
    axios
      .get(url, {
        headers: {
          "device-id": deviceId,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  };

  return (
    <div className="App">
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default NewDetail;
