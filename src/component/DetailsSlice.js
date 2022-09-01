import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {id:0};

const DetailsSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        getId:(state,action)=>{
            state.id = action.payload
        }
    }
})

export const {getId} = DetailsSlice.actions
export default DetailsSlice.reducer