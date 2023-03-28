import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import { EditData  } from "../slices/todo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function Editmodal(props) {
  const todoData = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    date:  "",
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const ediDirectlyIntheStore = () => {
    state.id = todoData.editData.id;
    dispatch(EditData(state));
  };
const handleDateChange = (event) => {
  // newValue is a material ui date
  /// console.log(newValue.prototype.getDate())

  // try to edit the date

  setState({
    ...state,[event.target.date]: event.target.value,
  });
  //dispatch(handleemptyState({name:"date",value:moment(newValue.toString()).format("YYYY-MM-DD")}));
};

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <div>
      <Button>Open modal</Button>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="name"
            name={"name"}
            color="primary"
            id="outlined-basic"
            focused
            value={state.name.length > 0 ? state.name : todoData.editData.name}
            variant="outlined"
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          
          <TextField
            label="Date"
            color="secondary"
            focused
            type={"date"}
            name={"date"}
            value={state.date.length > 0 ? state.date: todoData.editData.date}
            variant="outlined"
            onChange={handleChange}
          />

          <br></br>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={ediDirectlyIntheStore}
          >
            Edit Todo
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

 