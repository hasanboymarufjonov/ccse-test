// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function NewDetail() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const url = "https://ccse.uicgroup.tech/api/v1/news/new_year/detail/";

//     const deviceId = getDeviceId();
//     console.log(deviceId);
//     axios
//       .get(url, {
//         headers: {
//           "device-id": deviceId,
//         },
//       })
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const generateRandomString = () => {
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let randomString = "";

//     for (let i = 0; i < 6; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       randomString += characters.charAt(randomIndex);
//     }

//     return randomString;
//   };

//   function getDeviceId() {
//     let deviceId = localStorage.getItem("deviceId");
//     if (!deviceId) {
//       deviceId = generateRandomString();
//       localStorage.setItem("deviceId", deviceId);
//     }
//     return deviceId;
//   }

//   return (
//     <div className="App">
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default NewDetail;

import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Fingerprint2 from "fingerprintjs2";

function NewDetail() {
  const [data, setData] = useState(null);

  const getDeviceId = useCallback(() => {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = generateRandomString();
      localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
  }, []);

  useEffect(() => {
    const url = "https://ccse.uicgroup.tech/api/v1/news/new_year/detail/";

    const deviceId = getDeviceId();
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
  }, [getDeviceId]);

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
  // const fpPromise = import("https://openfpcdn.io/fingerprintjs/v3").then(
  //   (FingerprintJS) => FingerprintJS.load()
  // );

  // // Get the visitor identifier when you need it.
  // fpPromise
  //   .then((fp) => fp.get())
  //   .then((result) => {
  //     // This is the visitor identifier:
  //     const visitorId = result.visitorId;
  //     console.log(visitorId);
  //   });

  useEffect(() => {
    const generateFingerprint = async () => {
      try {
        const components = await Fingerprint2.getPromise();
        const values = components.map((component) => component.value);
        const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
        console.log(fingerprint);
        // Do something with the generated fingerprint
      } catch (error) {
        console.error("Error generating fingerprint:", error);
      }
    };

    generateFingerprint();
  }, []);

  return (
    <div className="App">
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default NewDetail;
