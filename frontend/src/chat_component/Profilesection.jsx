import React from 'react'
import { Search } from 'lucide-react'
import Users from './Users'

function Profilesection() {
  return (
    <>
    {/* searchbar */}
      <div className="flex gap-2 justify-center items-center bg-gray-700 h-20">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <input type="text" placeholder="Search" className="input input-primary" />
        <button className='cursor-pointer'>
          <Search className="w-10 h-10 text-sky-300 rounded-full p-1 hover:bg-sky-100/10 transition-all duration-300 ease-in-out"/>
        </button>
      </div>
      
      <div className="flex flex-col gap-  w-full">
        <h1 className="text-white rounded bg-gray-700 mt-2 p-3 font-semibold">Message</h1>
      </div>

      {/* profile info */}
      <div className="flex flex-col w-full overflow-x-scroll cursor-pointer" style={{height:"70vh"}}>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
        <Users/>
      </div>    
    </>
    
  )
}

export default Profilesection
