import {
  Alert,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import axios from "axios";

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

// {
//   field: "button",
//   headerName: "Button",
//   width: 110,
//   editable: true,
//   renderCell: (items) => (
//     <button onClick={handleDelete(items.row.id)}> delete</button>
//   ),
// },

// const handleDelete = (id) => {
//   console.log("ID is: " + id);
// };

export default function TODOList() {
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setinputDescription] = useState("");
  const [items, setItems] = useState([]);
  const [liveData, setLiveData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = useState("");
  const [updateText, setRowupdateText] = useState("");
  const [updateDescription, setupdateDescription] = useState("");
  const [updateStatus, setupdateStatus] = useState("");

  //const classes = useStyles();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Inside handle change event  ");
  };

  const handleInputDescriptionChange = (e) => {
    setinputDescription(e.target.value);
    console.log("Inside handle change event  ");
  };

  const handleClickOpen = (rowData) => {
    console.log("row Data:" + rowData.row.text);
    setRowData(rowData.row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const updateTextData = (event) => {
    setRowupdateText(event.target.value);
  };

  const updateeDesc = (event) => {
    setupdateDescription(event.target.value);
  };

  const updatetesStatus = (event) => {
    setupdateStatus(event.target.value);
  };

  const handleUpdateToDo = async () => {
    const id = rowData.id;
    console.log("---ID----" + id);
    try {
      const respone = await fetch("http://localhost:8080/toDO/" + id, {
        method: "PUT",
        body: JSON.stringify({
          uid: "----",
          text: updateText,
          description: updateDescription,
          isPending: updateStatus,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!respone.ok) {
        throw new Error("Server Error !!! please try again");
      }
      getData();
      setOpen(false);
    } catch (error) {
      console.log("Error---" + error.message);
    } finally {
    }
  };

  const addToDo = async () => {
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

  const handleDeleteItem = async () => {
    const id = rowData.id;
    try {
      const respone = await axios.delete("http://localhost:8080/toDO/" + id);
      getData();
      setOpen(false);
    } catch (error) {}
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
            onClick={addToDo}
          >
            Add Item
          </button>
        </div>

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
            onRowClick={handleClickOpen}
          />
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>To DO Update</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Selected To Do Items</DialogContentText>

            <Typography>Id : {rowData.id} </Typography>

            <TextField
              margin="dense"
              id="name"
              name="Text"
              label="Title or Content"
              type="text"
              onChange={updateTextData}
              defaultValue={rowData.text}
              fullWidth
              variant="standard"
            />

            <TextField
              margin="dense"
              id="name"
              name="Description"
              label="Description"
              type="text"
              onChange={updateeDesc}
              defaultValue={rowData.description}
              fullWidth
              variant="standard"
            />

            <TextField
              margin="dense"
              id="status"
              name="Status"
              label="Status"
              type="text"
              defaultValue={rowData.isPending}
              fullWidth
              onChange={updatetesStatus}
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUpdateToDo}>Update</Button>
            <Button onClick={handleDeleteItem}>Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
