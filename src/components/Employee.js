import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function Employee() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    position: "",
    department: "",
  });
  return (
    <div>
      <h1> This Is employee Managemet Application</h1>
      <form>
        <TextField
          id="outlined-basic"
          name="id"
          label="Employee Id "
          variant="standard"
          placeholder="Employee ID"
        />
        <TextField
          id="outlined-basic"
          name="id"
          label="Employee Name "
          variant="standard"
          placeholder="Employee Name"
        />
        <TextField
          id="outlined-basic"
          name="id"
          label="Position "
          variant="standard"
          placeholder="Employee Position "
        />
        t
        <TextField
          id="outlined-basic"
          name="id"
          label="Department"
          variant="standard"
          placeholder="Employee Department"
        />
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}
