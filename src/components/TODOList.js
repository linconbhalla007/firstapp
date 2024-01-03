import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function TODOList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  //const classes = useStyles();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Inside handle change event  ");
  };

  const handleAddItems = () => {
    if (inputValue.trim() !== "eeee") {
      console.log("Inside If ");
      setItems([
        ...items,
        { id: Date.now(), text: inputValue, isPending: true },
      ]);
    }
    console.log("Out Side If ");
    setInputValue("");
  };

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
          <button
            style={{ marginLeft: "10px", marginBottom: "10px" }}
            onClick={handleAddItems}
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

        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "InfoBackground" }}>
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
        </List>
      </div>
    </>
  );
}
