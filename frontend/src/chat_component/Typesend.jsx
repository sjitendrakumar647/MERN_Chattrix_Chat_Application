import { SendHorizonal } from 'lucide-react'
import React from 'react'

function Typesend() {
  return (
    <div className="flex gap-2 justify-start items-center bg-gray-800 p-3">
        <input
          type="text"
          placeholder="Search"
          className="input input-primary w-full max-w-md"
        />
        <button className="cursor-pointer">
          <SendHorizonal className="w-10 h-10 text-sky-500 rounded-full p-1 hover:bg-sky-100/10 transition-all duration-300 ease-in-out" />
        </button>
      </div>
  )
}

export default Typesend
