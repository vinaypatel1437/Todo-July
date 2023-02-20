import React, { Component } from "react";
import { TextField,InputLabel, Select, MenuItem, Button, FormControl } from "@mui/material";

export default class AddTodo extends Component {
  render() {
    return (
      <div className="create-todo">
        <h2>Create a Todo</h2>
        <TextField id="outlined-basic" label="Todo Title" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Todo Description"
          multiline
          rows={4}
        />
        <FormControl fullWidth>

        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={"todo"}>Todo</MenuItem>
          <MenuItem value={"inprogress"}>In Progress</MenuItem>
          <MenuItem value={"done"}>Done</MenuItem>
        </Select>
        </FormControl>
        <div className="action-wrapper">
          <Button variant="contained" color="success">
            Add
          </Button>
          <Button variant="outlined" color="error" onClick={()=>this.props.changeStatus(false)}>
            Close
          </Button>
        </div>
      </div>
    );
  }
}
