import React, { forwardRef } from 'react'
import "./SMS.css";
import {Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';
import {selectperson} from './features/personSlice';

const SMS=forwardRef(
  ({id, 
  contents:{
  timestamp, displayName, email, SMS, photo, uid},
},ref) =>{
  const person=useSelector(selectperson)
  return (
    <div ref={ref} className={`msg ${person.email === email && "msg_sender"}`}>
        <Avatar className="msg_photo" src={photo}/>
        <p>{SMS}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  )
}
)
export default SMS;