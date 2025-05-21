import React from 'react'

function Users() {
  return (
    // <div>
      <div className="flex flex-col gap-4 mt-5 p-1 pl-5 md:pl-10 cursor-pointer hover:bg-gray-600 transition-all ease-in-out duration-300">
          <div className="flex items-center gap-5">
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
        </div>
    // </div>
  )
}

export default Users
