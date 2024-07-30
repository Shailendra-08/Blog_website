  import React, { useEffect, useState } from "react";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import ProfilePost from "./ProfilePost";
  import { useContext } from "react";
  import { UserContext } from "../context/UserContext";
  import axios from "axios";
  import { URL } from "../url";
  import { useNavigate, useParams } from "react-router-dom";

  const Profile = () => {
    const param = useParams().id
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const fetchProfile=async()=>{
      try{
        const res = await axios(URL+"/api/user/"+user._id);
        setUsername(res.data.username);
        setEmail(res.data.email)

      }catch(err){
        console.log(err);
      }
    }

    useEffect(() => {
      fetchProfile(); 
    }, [param]);




    // handling the user update and then delete Function

    const handleUserUpdate=async()=>{
      try{
        const res = await axios.put(URL+"/api/user/"+user._id,{username,email},{withCredentials:true});
        console.log(res.data)

      }catch(err){
        console.log(err);
      }
    }

    const handleUserDelete=async()=>{
      try{
        const res = await axios.delete(URL + "/api/user/"+user._id,{withCredentials:true});
        setUser(null);
        navigate("/");

      }catch(err){
        console.log(err);
      }
    }


    return (
      <>
        <Navbar />
        <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start">
          <div className="flex flex-col md:w-[70%] w-full">
              <h1 className="text-xl font-bold mt-4">Your Post</h1>
              <ProfilePost />
              <ProfilePost />
              <ProfilePost />
              <ProfilePost />

          </div>
          <div className="md:sticky md:top-12 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end ">
              <div className="flex flex-col space-y-4 items-start">   


              <h1 className="text-xl font-bold mb-4">Profile</h1>
              
              <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" className="outline-none px-4 py-2 text-gray-500" placeholder="Your Username"/>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="outline-none px-4 py-2 text-gray-500" placeholder="Your email"/>
             
              <div className="flex items-center space-x-4 mt-8 ">
                  <button onClick={handleUserUpdate} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Update</button>
                  <button onClick={handleUserDelete} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Delete</button>

              </div>
              </div>
              





          </div>
        </div>

        <Footer />
      </>
    );
  };

  export default Profile;
