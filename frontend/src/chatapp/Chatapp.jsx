import React from 'react'
import ChatNavbar from '../chat_component/ChatNavbar'
import Mainsection from '../chat_component/Mainsection'
import { useAuth } from '../context/AuthProvider';
import Home from '../home/home';

function Chatapp() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <div>
      {authUser?(
        <>
        <ChatNavbar/>
        <Mainsection/>
        </>
      ):(<Home/>)}
        
    </div>
  )
}

export default Chatapp
