import { SendHorizonal } from 'lucide-react'
import React, { useState } from 'react'
import useSendMessage from '../context/useSendMessage.js'
import useGetMessage from '../context/useGetMessage.js' // Import your message hook/store

function Typesend() {

  const { sendMessage, loading } = useSendMessage();
  const { fetchMessages } = useGetMessage(); // Make sure this is exposed in your hook/store
  const [message, setMessage] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
    fetchMessages(); // Refresh messages after sending
  }

  return (
    <form onSubmit={handelSubmit}> 
      <div className="flex gap-2 justify-start items-center bg-gray-800 p-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Search"
          className="input input-primary w-full max-w-md"
        />
        <button className="cursor-pointer">
          <SendHorizonal className="w-10 h-10 text-sky-500 rounded-full p-1 hover:bg-sky-100/10 transition-all duration-300 ease-in-out" />
        </button>
      </div>
    </form>
  )
}

export default Typesend
