import { createSlice } from '@reduxjs/toolkit'



//reducers for the person entering in the app
export const personSlice = createSlice({
  name: 'person',
  initialState:{
      person:null,
  },
  //reduces fucntion for logging in and out
  reducers: {
    login:(state, action)=> {
        state.person= action.payload;
      },
      logout: (state) => {
       state.person = null;
      },
    },
});


// login and logout actions for different reducers
export const { login, logout } = 
personSlice.actions;




export const selectperson = (state)=>
    state.person.person;


export default personSlice.reducer;