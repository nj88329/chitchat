import './App.css';
import Chatapp from './Chatapp';
import { useDispatch,useSelector } from "react-redux";
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { selectperson,login,logout } from "./features/personSlice"


function App() {
const person = useSelector(selectperson);
const dispatch = useDispatch();  




//function to to login using emailID
useEffect(()=>{
  auth.onAuthStateChanged((authperson)=>{
    if(authperson){
      //person is loggedIn 
      dispatch(login({
        uid:authperson.uid,
        photo:authperson.photoURL,
        email:authperson.email,
        displayName:authperson.displayName,
      }));
    }else{
      dispatch(logout())
      //person is Logged out
    }
  })
})


  return (
    <div className="App">
      {
        person ? (
          <Chatapp/>
        )
        :<Login/>
      } 
    </div>
  );
}

export default App;
