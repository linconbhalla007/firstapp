import { FiberNew, FlashOffOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "userId", headerName: "User Id", width: 90 },

  {
    field: "body",
    headerName: "Comment",
    sortable: false,
    width: 500,
  },
  {
    field: "title",
    headerName: "Title",
    sortable: false,
    width: 500,
  },
];

export default function APICalling() {
  const [response, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
          //   {
          //     method: "POST",
          //     body: JSON.stringify({
          //       title: "Rohit",
          //       body: "Dinesh",
          //       userId: 100,
          //     }),
          //     headers: {
          //       "Content-type": "application/json; charset=UTF-8",
          //     },
          //   }
        );

        if (!respone.ok) {
          throw new Error("Server Error !!! please try again");
        }
        const result = await respone.json();
        console.log("---" + JSON.stringify(result));
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Box sx={{ height: "100%", width: "100%" }}>
        <h1>This Is Post List </h1>
        <DataGrid
          rows={response}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 50,
              },
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );

  //create read with help of featch awat and async

  //axios
}
