import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Users from './Users'
import useGetAllUsers from '../context/useGetAllUsers'
import userConversation from '../zustand/userConversation';
import { toast } from 'react-toastify';

function Profilesection() {
  const [users] = useGetAllUsers();
  const [search, setSearch] = useState("");
  // const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = userConversation();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredUsers.length > 0) {
      setSelectedConversation(filteredUsers[0]);
      setSearch("");
    } else {
      // alert("No user found");
      toast.error("No user found with this name or email");
      setSelectedConversation(null);
      setSearch("");
    }
  }
  return (
    <>
    {/* searchbar */}
      <form action="" onSubmit={handelSubmit}>
        <div className="flex gap-2 justify-center items-center bg-gray-700 h-20">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <input type="text" placeholder="Search" className="input input-primary" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button className='cursor-pointer'>
          <Search className="w-10 h-10 text-sky-300 rounded-full p-1 hover:bg-sky-100/10 transition-all duration-300 ease-in-out"/>
        </button>
      </div>
      </form>
      
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-white rounded bg-gray-700 mt-2 p-3 font-semibold">Message</h1>
      </div>

      {/* profile info */}
      <div className="flex flex-col w-full overflow-x-scroll cursor-pointer" style={{height:"70vh"}}>
        {users.map((user) => (
          <Users key={user._id} user={user} />
        ))}
        
      </div>    
    </>
    
  )
}

export default Profilesection
