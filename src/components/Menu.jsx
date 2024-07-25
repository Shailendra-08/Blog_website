import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { URL } from '../url';
import axios from 'axios';
const Menu = () => {
  const {user}=useContext(UserContext);
  const {setUser}=useContext(UserContext);


  const handleLogout=async()=>{
    try{
      const res = await axios.get(URL+"/api/auth/logout",{withCredentials:true});
      console.log(res);
      setUser(null)
    }catch(e){
      console.log(e);
    }
  }


  return (
    <div className='bg-black w-[200px] flex flex-col items-start absolute top-12 md:right-44 right-5 rounded-md p-4 space-y-4'>

       {!user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Login</h3> } 
        {!user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Regsiter</h3>}


        {user && <h3 className='text-white text-sm hover:text-gray-500  cursor-pointer'>Profile</h3>}
        {user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Write</h3>}
        {user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>My Blog</h3>}
        {user && <h3 onClick={handleLogout} className='text-white text-sm hover:text-gray-500 cursor-pointer'>Logout</h3>}



    </div>
  )
}

export default Menu