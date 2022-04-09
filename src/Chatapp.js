import React from 'react';
import "./talk.css";
import Left from './Left';
import Talk from './Talk';

function Chatapp() {
  return (
    <div className='iSMS' style={{display:'flex',flexDirection:'row'}}>
         <Left/>
        <Talk/>
    </div>
  )
}

export default Chatapp