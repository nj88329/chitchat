import React,{useState, useEffect} from 'react';
import { Avatar } from '@material-ui/core';
import './Lefttalk.css';
import {useDispatch} from "react-redux";
import {settalk } from "./features/talkSlice"
import db from './firebase'

function Lefttalk({id, talkName}) {
   const dispatch = useDispatch();
  const [talkInfo, settalkInfo] = useState([]);



  //selecting the messaging and showing the latest message below the channel name
  useEffect(()=>{
    db.collection('talks').doc(id).collection('SMSs')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>(
      settalkInfo(snapshot.docs.map((doc)=>doc.data()))
    ));
  },[id])



  return (
   <div onClick={()=>{
      dispatch(
        settalk({
          talkId:id,
          talkName:talkName
        })
    )
    }}

    //settign avatar for the person and sisplaying messages
      className='Lefttalk'>
      <Avatar src={talkInfo[0]?.photo}/>
      <div className='Lefttalk_info'>
          <h3>
          {talkName}
          </h3>
      <p>{talkInfo[0]?.SMS}</p>
          <small>
          
          </small>
      </div>
    </div>
  )
}

export default Lefttalk;