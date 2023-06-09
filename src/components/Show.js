import  React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import BrushIcon from '@mui/icons-material/Brush';
import { deleteTodo } from "../slices/todo";
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
 
const Show = (props) => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.todo);
  console.log(Todo)
  const DeleteId = (id) => {
    dispatch(deleteTodo(id));
    console.log(id)
  };
  return(
  <Grid item xs={12} md={6}>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
    Todo with delete Icon
    </Typography>
    <Demo>
      <List dense={dense}>
        {Todo.todos.map((ele) => (
          <ListItem
            key={ele.id}
            secondaryAction={
              <>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => DeleteId(ele.id)}
              >
                <DeleteIcon />
              </IconButton>
               <IconButton
                edge="end"
                aria-label="delete"
            onClick={()=>props.handleModalOpen(ele)}
              >
                <BrushIcon />
              </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={ele.name}
              secondary={secondary ? "Secondary text" : null}
            />
        
          <ListItemText
              primary={ele.date}
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        ))}
      </List>
    </Demo>
  </Grid>
  )
};
export default Show;