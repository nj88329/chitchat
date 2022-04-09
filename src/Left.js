import { Avatar, IconButton } from '@material-ui/core'
import  SearchIcon  from "@material-ui/icons/Search";
import  RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import React, {useState, useEffect } from 'react';
import db, { auth } from './firebase'
// import './talk.css';
import './Left.css';
import Lefttalk from './Lefttalk';
import { useSelector } from 'react-redux';
import { selectperson } from "./features/personSlice"


//left side of app
function Left() {
    const [talks, settalk] = useState([]);
    const person = useSelector(selectperson);
    const [val, setVal]=useState('');
    //const [channel, setChannel]=useState([]);
    //function to create channel
    useEffect(()=>{       
        db.collection('talks').onSnapshot((snapshot)=>{
            settalk(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            })))
            
        })
    },[]);
   
//   const filterChat=(val)=>{
//       setVal(val)
//       talks.filter((chats)=>{
//           chats.includes(val).map((filtered)=>filteredName);
//       }
          
//       )
//   }
    



    //function to writer the channel name
    const addtalk=()=>{
        const talkName=prompt('Please ENter talk name')
         if(talkName){
            db.collection('talks').add({
                talkName:talkName
            })
        }
    }
  return (
    <div className='Left'>
        <h2>Left</h2>
          
         <div className='Left_header'>
           <Avatar onClick={()=>auth.signOut()}
           src={person.photo}
           className="Left_avatar"/>
                <div className="Left_input">
                    {/* <SearchIcon/> */}
                    <input placeholder=""/>
                </div>
            <IconButton variant = "outlined"  className="Left_inputButton" onClick={addtalk}>
                <RateReviewOutlinedIcon />
            </IconButton>
         </div> 
         <div className='Left_talks'>
        
          {
             
              talks.map(({id, data:{talkName}})=>{
                  return(
                <Lefttalk key={id} id={id} talkName={talkName}/>
                  )
              })
          }
       
          
         </div>
    </div>
  )
}

export default Left