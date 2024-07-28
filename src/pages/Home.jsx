import React, { useContext, useEffect, useState } from 'react'
import Homepost from '../components/Homepost'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { URL } from '../url'
import { Link, useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import { UserContext } from '../context/UserContext'

export const Home = () => {

  const {search} = useLocation();
  console.log(search)

  const [posts,setPosts]=useState([]);

  const [noResults,setnoResults]=useState(false);
  const [loader,setloader] = useState(false);
  const {user} =useContext(UserContext)
  console.log(user)

  const fetchPost = async ()=>{
    setloader(true)
    try{
      const res=await axios.get(URL + "/api/post/"+search);
      console.log(res.data);
      setPosts(res.data);

      // condition check 
      if(res.data.length === 0){
        setnoResults(true);
      }else{
        setnoResults(false);
      }
      setloader(false)

    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    fetchPost()
  },[search])




  return (
    <>
    <Navbar />
<div className='px-8 md:px-[200px] min-h-[80vh]'>

 {loader? <div className='h-[40vh] flex justify-center items-center'>  <Loader /> </div> :!noResults? 
 posts.map((post) => (
  <>

<Link to={user? `/post/post/${post._id}`:"/login"}>
  <Homepost key={post._id} post={post} />
  </Link>
  
  </>
  
  
)): <h3 className='text-center font-bold mt-16'>No Posts available </h3>



}


    </div>

    <Footer />
    
    
    
    
    </>
    
  )
}
