import React from 'react'
import userConversation from '../zustand/userConversation.js';
import { useSocketContext } from '../context/SocketContext.jsx';

function Chatuser() {

    const { socket, onlineUsers } = useSocketContext();
    const getStatus = (userId)=>{
      return onlineUsers.includes(userId)?"Online":"Offline";
    }
  
  const {selectedConversation} = userConversation();
  // console.log(selectedConversation.name);


  // console.log(authUser);
  return (
    <div className="flex justify-center items-center gap-5 h-20 bg-gray-700">
        <div className="avatar avatar-online w-10">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-white font-semibold">{selectedConversation.name} (<span>{getStatus(selectedConversation.userId)}</span>)</h2>
          <p className="text-gray-400">{selectedConversation.email}</p>
        </div>
      </div>
  )
}

export default Chatuser
