import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CreatePost = () => {
  return (
    <div>
        <Navbar />

        <div className="px-6 md:px-[200px] mt-8">
            <h1 className='font-bold md:text-2xl text-xl mt-8'>Create a post </h1>
            <form className='w-full flex flex-col space-y-4 md:space-y-8' action="POST">
            <input type="text"  className='px-4 py-2 outline-none' placeholder='Enter Post title'/> 
            <input type="file"  className='px-4' /> 




            </form>



        </div>













        <Footer />
    </div>
  )
}

export default CreatePost