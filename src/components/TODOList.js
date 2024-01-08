import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "text", headerName: "Text", width: 90 },

  {
    field: "description",
    headerName: "Description",
    sortable: false,
    width: 500,
  },
  {
    field: "isPending",
    headerName: "Status",
    sortable: false,
    width: 500,
  },
];

export default function TODOList() {
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setinputDescription] = useState("");
  const [items, setItems] = useState([]);
  const [liveData, setLiveData] = useState([]);
  //const classes = useStyles();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Inside handle change event  ");
  };

  const handleInputDescriptionChange = (e) => {
    setinputDescription(e.target.value);
    console.log("Inside handle change event  ");
  };

  const fetchData = async () => {
    try {
      const respone = await fetch("http://localhost:8080/toDO", {
        method: "POST",
        body: JSON.stringify({
          uid: Date.now(),
          text: inputValue,
          description: inputDescription,
          isPending: "true",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!respone.ok) {
        throw new Error("Server Error !!! please try again");
      }
      setInputValue("");
      setinputDescription("");
      getData();
    } catch (error) {
      console.log("Error---" + error.message);
    } finally {
    }
  };

  const getData = async () => {
    try {
      const respone = await fetch("http://localhost:8080/toDO");

      if (!respone.ok) {
        throw new Error("Server Error !!! please try again");
      }
      const result = await respone.json();
      setLiveData(result);
    } catch (error) {
      console.log("Error---" + error.message);
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleAddItems = () => {
  //   if (inputValue.trim() !== "eeee") {
  //     console.log("Inside If ");
  //     setItems([
  //       ...items,
  //       {
  //         id: Date.now(),
  //         text: inputValue,
  //         description: inputDescription,
  //         isPending: true,
  //       },
  //     ]);
  //   }

  //   fetchData();
  //   console.log("Out Side If ");
  //   setInputValue("");
  // };

  const handleDeleteItem = (itemId) => {
    console.log("Item IS---" + itemId);
    const updateItems = items.filter((item) => item.id !== itemId);
    setItems(updateItems);
  };

  return (
    <>
      <div>
        <Title>To-Do-Application</Title>
        <div>
          <input
            type="text"
            value={inputValue}
            placeholder="To-Do Items"
            onChange={handleInputChange}
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />

          <input
            type="text"
            value={inputDescription}
            placeholder="To-Do Description"
            onChange={handleInputDescriptionChange}
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <button
            style={{ marginLeft: "10px", marginBottom: "10px" }}
            onClick={fetchData}
          >
            Add Item
          </button>
        </div>
        {/* <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul> */}

        <Box sx={{ height: "100%", width: "100%" }}>
          <h1>This Is Post List </h1>
          <DataGrid
            rows={liveData}
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

        {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "InfoBackground" }}>
          {items.map((value) => {
            const labelId = `checkbox-list-label-${value.id}`;

            return (
              <ListItem key={value.id} disablePadding>
                <ListItemButton role={undefined} dense>
                  <ListItemText id={labelId}>
                    {"List Item" + value.text}
                  </ListItemText>
                  <Button onClick={() => handleDeleteItem(value.id)}>
                    Delete
                  </Button>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List> */}
      </div>
    </>
  );
}
