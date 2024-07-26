import React, { useEffect, useState } from 'react'
import Homepost from '../components/Homepost'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { URL } from '../url'

export const Home = () => {

  const [posts,setPosts]=useState([]);

  const fetchPost = async ()=>{
    try{
      const res=await axios.get(URL + "/api/post/");
      console.log(res.data);
      setPosts(res.data);

    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    fetchPost()
  },[])




  return (
    <>
    <Navbar />
<div className='px-8 md:px-[200px]'>

 {posts.map((post) => (
  <Homepost key={post._id} post={post} />
))}



      {/* <Homepost />
      <Homepost />
      <Homepost />
      <Homepost />
      <Homepost />
      <Homepost /> */}
    </div>

    <Footer />
    
    
    
    
    </>
    
  )
}
