import React,{useState,useEffect} from 'react'
import './talk.css';
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import SMS from './SMS';
import {selecttalkId, selecttalkName } from './features/talkSlice';
import {useSelector}  from 'react-redux';
import db from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { selectperson } from "./features/personSlice"
import FlipMove from "react-flip-move";

function Talk() {
    const [input, setInput] = useState('');
    const [SMSs, setSMSs] = useState([]);
    const talkName=useSelector(selecttalkName);
       const talkId = useSelector(selecttalkId);
         const person = useSelector(selectperson);

       useEffect(()=>{
         if(talkId){
           db.collection('talks').doc(talkId)
           .collection("SMSs").orderBy("timestamp","desc")
           .onSnapshot((snapshot)=>{
             setSMSs(snapshot.docs.map(
               (doc)=>({
                 id:doc.id,
                  data:doc.data()
               })
             ))
           })

         }
       },[talkId])




       const sendSMS=(e)=>{
         e.preventDefault();
         db.collection('talks').doc(talkId).collection("SMSs").add({
         timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            SMS:input,
             uid:person.uid,
            photo:person.photo,
             email:person.email,
             displayName:person.displayName,
          });
         setInput("");
       };
  return (
    <div className="talk">
      <div className='talk_header'>
          <h4>
          TO : <span className="talk_name">
           {talkName}
          </span> 
          </h4>
          <strong></strong>
      </div>
      <div className="talk_SMSs">
      <FlipMove>
          {
            SMSs.map(({id, data})=>(
             <SMS key={id} contents={data}/>
            )
            )
          }
      </FlipMove>
      </div>
      <div className='talk_input'>
       <form>
          <input 
           value={input}
           onChange={(e)=>setInput(e.target.value)}
          type="text"/>
          <button style={{marginTop:'-31px',marginLeft:'800px',color:'blueviolet' }} onClick={sendSMS}>Send SMS</button>
       </form>
        <IconButton>
            <MicNoneIcon className="talk_mic"/>
        </IconButton>
      </div>
 </div>
  )
}

export default Talk