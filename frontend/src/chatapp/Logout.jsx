import React from 'react'
import { useAuth } from '../context/Authprovider'
import { toast } from 'react-toastify'
import Home from '../home/home'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handelLogout =async ()=>{
    try{
        await axios.get("http://localhost:4001/user/logout", {
        withCredentials: true, // to clear cookie from server
      });
      setAuthUser(undefined);
      localStorage.removeItem("users");
      Cookies.remove("jwt"); // remove jwt cookie
      
      toast.success("Successfully Logged out ✅");
      window.location.reload();
      setTimeout(() => {
        <Navigate to='/' />
      }, 3000);
      
    }catch(err){
      toast.error("Some Error occurs:" + err.message);
    }
  }
  return (
    <div>
      <button className='bth bg-red-500 p-2 px-3 rounded cursor-pointer hover:bg-red-700 transition-all'
      onClick={handelLogout}>
        logout
      </button>
    </div>
  )
}
