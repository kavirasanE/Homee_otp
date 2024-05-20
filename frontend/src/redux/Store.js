import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./FavouriteSlice";
import { useReducer } from "react";

const initialState = [{ id: 1, name: "kavi", done: false }];

const taskreducer = (task, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...addMethod,
        {
          id: action.id,
          name: action.name,
          done: false,
        },
      ];
    }
    case "changed":{
        return  task.map((n) =>{ if(n.id === action.task.id){
           return action.task;
        }});

    }
  }
};

// const { state, dispatch } = useReducer(taskreducer, initialState);

// const handleAdd = () => {
//  dispatch=({

//     type:"added",
//     id:nextId++ ,
//     text:text
//  })

// }


export const store = configureStore({
  reducer: {
    favourites: FavouriteSlice,
  },
});
