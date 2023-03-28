import React ,{useState}from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
 import moment from "moment"
import { handleemptyState } from "../slices/todo";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const Add = (props) => {
  const dispatch=useDispatch()
         const stateData = useSelector((state) => state.todo);
      const [state, setState] = useState({
        name:"",
        date:""
      });
     
    
const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.value });
};

 
    
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Todo"
        name={"name"}
        value={state.name}
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
        value={state.date}
        variant="outlined"
        onChange={handleChange}
      />
      <br></br>

      <Button
        style={{ marginTop: "50px" }}
        variant="contained"
        onClick={() => props.addtodoEvent(state)}
      >
        AddTodo
      </Button>
    </div>
  );
}

export default Add