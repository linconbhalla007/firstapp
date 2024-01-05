import { FiberNew, FlashOffOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function APICalling() {
  const [response, setData] = useState(null);
  const [error, setError] = useState(null);

  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify({
              title: "Rohit",
              body: "Dinesh",
              userId: 100,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        if (!respone.ok) {
          throw new Error("Server Error !!! please try again");
        }
        const result = await respone.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>This Is for calling API </h1>
      {/* <p1>{error.message}</p1> */}
      <p1>{JSON.stringify(response)}</p1>
    </div>
  );

  //create read with help of featch awat and async

  //axios
}
