import {createSlice} from "@reduxjs/toolkit"

 const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducer:{
        addUser:(state,action)=>{
            return state.action.payload;
        },
        removeUser:(state)=>{
            return null
        }
    }
 })

 export const {addUser,removeUser}=userSlice.actions

 export default userSlice.reducer;