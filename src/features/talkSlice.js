import { createSlice } from '@reduxjs/toolkit';


//reducers for creating chat
export const talkSlice = createSlice({
   name:'talk',
   initialState: {
       talkId:null,
       talkName:null,
   },
   reducers:{
       settalk:(state, action)=>{
        state.talkId = action.payload.talkId;
        state.talkName = action.payload.talkName;
       },
   },
})


//actions for differnt talkslice functions
export const { settalk } = talkSlice.actions;
export const selecttalkName  = (state)=> state.talk.talkName;
export const selecttalkId  = (state)=> state.talk.talkId;

export default talkSlice.reducer; 