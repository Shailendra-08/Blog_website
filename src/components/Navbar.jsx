import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import Menu from './Menu';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  // console.log(params);

  const [menu,setMenu] = useState(false);
  const [prompt,setPrompt] = useState("");
  console.log(prompt)


  const showMenu=()=>{
    setMenu(!menu)

  }


  const {user}=useContext(UserContext);
  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4'>
        <h1 className='text-lg md:text-xl font-extrabold'><Link to="/">Blog Website</Link></h1>
        {path === "/" && <div className='flex justify-center items-center space-x-0'>
            <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className='cursor-pointer'><FaSearch /></p>
            <input onChange={(e)=>setPrompt(e.target.value)} type="text" placeholder='Search a Post' className='outline-none px-3'/>

        </div>}


        <div className='hidden md:flex items-center justify-center space-x-2 md:space-x-4'>

            {user?<h3><Link to="/write">Create Blog</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
            {user?<div onClick={showMenu} >
          <p className='cursor-pointer relative'><FaBars /></p>
          {menu && <Menu/>}

              </div>
              
              
              
              :<h3><Link to="/register">Register</Link></h3>}

        </div>

        <div onClick={showMenu} className="md:hidden text-lg">
          <p className='cursor-pointer relative'><FaBars /></p>
          {menu && <Menu/>}
        </div>



    </div>
    
  )
}

export default Navbar