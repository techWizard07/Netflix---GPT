import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignupForm,setIsSignupForm]=useState(false)

  const handleSignIn=()=>{
    setIsSignupForm(!isSignupForm)
  }
  return (
    <div className='h-lvh'>
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
      </div>
      <div className="">
        <form action="" className=" absolute w-3/12 p-12  bg-black my-36 right-0 left-0 text-white mx-auto rounded-md bg-opacity-80 ">
          <h1 className="text-3xl font-bold py-4">{isSignupForm ? "Sign Up" : "Sign In"}</h1>
        
          {isSignupForm &&<input type="text" placeholder="Name" className='p-4 my-4 w-full bg-gray-700'/>}
          {isSignupForm && <input type="number" placeholder="Phone number" className='p-4 my-4 w-full bg-gray-700'/>}
          <input type="text" placeholder="Email address" className='p-4 my-4 w-full bg-gray-700'/>
          <input type="password" placeholder="password" className='p-4 my-4 w-full bg-gray-700'/>
          <button className="rounded-lg bg-red-600 p-4 my-4 w-full">{isSignupForm ? "Sign Up" : "Sign In"}</button>
        <p className='cursor-pointer' onClick={handleSignIn}>{isSignupForm ? "Already have an account?" : "New to Netflix? Sign up now."}</p>
        </form>
      </div>
    </div>
  )
}

export default Login