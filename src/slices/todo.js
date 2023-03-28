import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
 import Add from "../components/Add";
 import moment from "moment";
 import { fetchGoogleBooks, fetchProducts } from "../thunk";
const initialState = {
  todos: [],
  apiData: [],
  editData: {
    name: "",
    date: moment().format("YYYY-MM-DD"),
  },
};

const todo = createSlice({
  name: "todo",
 
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(state.todos);
      //console.log(action.payload);
      // debugger;
      state.todos.push({
        name: action.payload.name,
        id: uuidv4(),
        date: action.payload.date,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((ele) => ele.id != action.payload);
    },
    handlePopupEditData: function (state, action) {
      state.editData = action.payload;
    },
    handleemptyState: function (state, action) {
      console.log(action.payload);

      // debugger;

      //debugger;
      state.emptyState[action.payload.name] = action.payload.value;

      // object instead
      // state.todos=state.todos.filter(ele=>ele.id!=action.payload)
    },
    EditData: function (state, action) {
      //state.editData=action.payload

      // first filter out the old data
      let filtered = state.todos.filter((ele) => ele.id != action.payload.id);
      filtered.push(action.payload);
      state.todos = filtered;
    },
  },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            let data=action.payload.data;
            state.apiData=data;


        });
        builder.addCase(fetchProducts.rejected,(state,action)=>{

        });

        builder.addCase(fetchProducts.pending,(state,action)=>{

        });

        builder.addCase(fetchGoogleBooks.fulfilled,(state,action)=>{
           // debugger;
            let data=action.payload.data;
            state.apiData=data;


        });
        builder.addCase(fetchGoogleBooks.rejected,(state,action)=>{

        });

        builder.addCase(fetchGoogleBooks.pending,(state,action)=>{

        })


    }

 
 
});

// you have to export two things from here

// actions

export const { addTodo, deleteTodo, EditData, handlePopupEditData, handleemptyState } =
  todo.actions;

// the reducer

export default todo.reducer;
