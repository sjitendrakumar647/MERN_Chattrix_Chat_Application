import React from 'react'
import Messages from './Messages'
import Typesend from './Typesend'
import Chatuser from './Chatuser'

function Chattingsection() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Banner */}
      <Chatuser/>

      {/* Chat messages (Placeholder for now) */}
      <div className="flex-grow p-4 text-white overflow-y-scroll" style={{height:"70vh"}}>
        <Messages/>
        <Messages/>
        <Messages/>        
      </div>

      {/* Chat input at the bottom */}
      <Typesend/>
    </div>
  )
}

export default Chattingsection
