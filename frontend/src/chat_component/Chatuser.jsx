import React from 'react'

function Chatuser() {
  return (
    <div className="flex justify-center items-center gap-5 h-20 bg-gray-700">
        <div className="avatar avatar-online w-10">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h2 className="text-white font-semibold">John Doe</h2>
          <p className="text-gray-400">john@gmail.com</p>
        </div>
      </div>
  )
}

export default Chatuser
