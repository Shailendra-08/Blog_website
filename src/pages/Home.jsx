import React from 'react'
import Homepost from '../components/Homepost'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export const Home = () => {
  return (

    <>
    <Navbar />


<div className='px-8 md:px-[200px]'>
      <Homepost />
      <Homepost />
      <Homepost />
      <Homepost />
      <Homepost />
      <Homepost />
    </div>

    <Footer />
    
    
    
    
    </>
    
  )
}
