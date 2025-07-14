import React from 'react'
import userConversation from '../zustand/userConversation';
import { useSocketContext } from '../context/SocketContext';

function Users({ user }) {
  const { selectedConversation, setSelectedConversation } = userConversation();
  const isSelected = selectedConversation?._id === user._id;

  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`flex flex-col gap-4 mt-5 p-1 pl-5 md:pl-10 cursor-pointer hover:bg-sky-400/70 transition-all ease-in-out duration-300 ${isSelected ? 'bg-sky-400/90' : ''}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center gap-5">
        <div className={`avatar ${isOnline ? 'avatar-online' : ''} w-10`}>
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-white font-semibold">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Users
