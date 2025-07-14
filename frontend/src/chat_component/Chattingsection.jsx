import React, { useEffect, useRef } from 'react'
import Messages from './Messages'
import Typesend from './Typesend'
import Chatuser from './Chatuser'
import useGetMessage from '../context/useGetMessage.js'
import Loading from '../components/Loading.jsx'
import userConversation from '../zustand/userConversation.js'
import { useAuth } from '../context/AuthProvider.jsx'
import useGetSocketMessage from '../context/useGetSocketMessage.js'

function Chattingsection() {

  const {loading, messages} = useGetMessage();
  useGetSocketMessage();
  const arrlength = messages.length;

  const lastMessage = useRef()
  useEffect(() => {
    setTimeout(() => {
      if (lastMessage.current) {
        lastMessage.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [messages]);

  const {selectedConversation, setSelectedConversation} = userConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  },[setSelectedConversation]);

  
  return (
    <div>
      {!selectedConversation ? (<NoChatSelected/>):(
        <>
        <div className="flex flex-col min-h-full">
      <Chatuser/>

      <div className="flex-grow p-4 text-white overflow-y-scroll" style={{height:"70vh"}}>

        {loading ? (<Loading/>) : (
          arrlength > 0 && messages.map((message, idx) => {
            const isLast = idx === arrlength - 1;
            return isLast ? (
              <div ref={lastMessage} key={message._id}>
                <Messages 
                  key={message._id} 
                  message={message} 
                  senderId={message.senderId}
                />
              </div>
            ) : (
              <Messages 
                key={message._id} 
                message={message} 
                senderId={message.senderId}
                ref={isLast ? lastMessage : null}
              />
            );
          })
        )}




        {/* If no messages, show a placeholder */}
        {!loading && arrlength === 0 && (
          <NoChatSelected/>
        )}
      </div>

      {/* Chat input at the bottom */}
      <Typesend/>
    </div>
        </>
      )}
    </div>
  )
}

export default Chattingsection


const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-150 text-center">
      <h1>Welcome <span className='font-semibold'>{authUser.user.name}</span></h1>
      <h2 className="text-2xl font-semibold text-gray-500">Select a chat to start messaging</h2>
      <p className="text-gray-400 mt-2">Your conversations will appear here.</p>
    </div>
  );
}
