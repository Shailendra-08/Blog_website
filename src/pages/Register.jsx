import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from 'axios'
import {URL} from '../url'
const Register = () => {


  const [username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setError]= useState(false);
  const navigate=useNavigate(); // to nagviagte form one page to another

  const handleRegister= async()=>{
    try{
      const res =await axios.post(URL+"/api/auth/register",{username,email,password});
      // console.log(res);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);

      navigate("/login");

    }catch(e){
      setError(true);
      console.log(e);
    }

  }

  





  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Blog Website</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>

      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Register</h1>

          <h4 className="font-bold text-left">Create an account</h4>
          <input onChange={(e) =>setUsername(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0"
            type="text"
            placeholder="Enter your Username"
          />
          <input onChange={(e) =>setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0"
            type="text"
            placeholder="Enter your email"
          />
          <input onChange={(e) =>setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0"
            type="text"
            placeholder="Enter your password"
          />

          <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-grey-500 hover:text-black">
            Register
          </button>
          {error && <h3 className="text-red-500 text-sm">Something Went Wrong</h3>}

          <div className="flex justify-center items-center space-x-3">
            <p>Already have an Account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
