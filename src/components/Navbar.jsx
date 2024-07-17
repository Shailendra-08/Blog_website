import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-[180px] py-4'>
        <h1 className='text-lg md:text-xl font-extrabold'><Link to="/">Blog Website</Link></h1>
        <div className='flex justify-center items-center space-x-0'>
            <p><FaSearch /></p>
            <input type="text" placeholder='Search a Post' className='outline-none px-3 py-1'/>

        </div>


        <div className='flex items-center justify-center space-x-2 md:space-x-4'>

            <h3><Link to="/login">Login</Link></h3>
            <h3><Link to="/register">Register</Link></h3>

        </div>



    </div>
    
  )
}

export default Navbar