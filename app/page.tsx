"use client"
//import { useState, useEffect } from 'react'
import Header from '@/components/ui/header'
import SlidersWithText from '@/components/ui/slider'
import Video from '@/components/ui/videos'
import Chatbot from "@/components/ui/chatbot"
import { Footer } from '@/components/ui/footer'

const Home = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token'); // Check if the token exists in localStorage
  //   if (token) {
  //     setIsAuthenticated(true); // If token exists, the user is authenticated
  //   }
  // }, []);

  return (
    <div> 
      <Header />
      
      {/* Conditionally render based on authentication status */}
      {/* {!isAuthenticated ? (
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold">You are not logged in</h2>
          <Link href="/login" className="text-blue-500">
            Login here
          </Link>
          <Link href="/register">Register</Link> */}

     
      
        
          <Video />
          <SlidersWithText />
          <Chatbot />
          <Footer/>
          
          
      
          </div>
          
  )
  
  
  
}

export default Home;
