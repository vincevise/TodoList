import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [
        {
        id:0,
          title:'reading a book',
          body:'read a book about becoming a Developer',
          isCompleted:false
        },
        {
          title:'reading a book',
          body:'read a book about becoming a Developer',
          isCompleted:false,
          id:1
        },
        {
          title:'reading a book',
          body:'read a book about becoming a Developer',
          isCompleted:false,
          id:2
        },
        {
          title:'reading a book',
          body:'read a book about becoming a Developer',
          isCompleted:false,
          id:3
        },
        {
          title:'reading a book',
          body:'read a book about becoming a Developer',
          isCompleted:false,
          id:4
        }
      ],
      searchResults:[]
}

export const todoSlice = createSlice ({
    name:'todo',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.data.push(action.payload)
        },
        toggleCompleted:(state,action)=>{
            const index = state.data.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state.data[index].isCompleted = action.payload.isCompleted
        },
        removeTask:(state,action) =>{
            state.data =  state.data.filter((item)=>item.id !== action.payload.id)
        },
        searchItem:(state,action)=>{
          if(action.payload === ''){
            state.searchResults = state.data.map((item)=>item.id)
          }
          const searchItems = state.data.filter((item)=> item.body.toLowerCase().includes(action.payload) || item.title.toLowerCase().includes(action.payload)) 
          state.searchResults = searchItems.map((item)=>item.id)
        }

    }
})

export const {addTask,removeTask,toggleCompleted,searchItem} = todoSlice.actions
export default todoSlice.reducer