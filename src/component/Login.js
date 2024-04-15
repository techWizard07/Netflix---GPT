import React, {useRef, useState } from 'react'
import Header from './Header'
import { validateSignin,validateSignup } from '../utils/validate' 
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase'
import {useDispatch} from 'react-redux'

import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';
const Login = () => {

  const[isSignupForm,setIsSignupForm]=useState(false)
  const[errMessage,setErrMessage]=useState(null);

  const dispatch=useDispatch();

  
  let name=useRef(null)
  let phone=useRef(null)
  let email=useRef(null)
  let password=useRef(null)
  
  const handleSignIn=()=>{
    setIsSignupForm(!isSignupForm)
  }

  const handleSigninClick=()=>{
    const message = isSignupForm ? validateSignup (name.current.value,phone.current.value,email.current.value,password.current.value) : validateSignin(email.current.value,password.current.value)
    setErrMessage(message)
    if(message) return;
  
    if(isSignupForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    const user = userCredential.user;
  updateProfile(user, {
  displayName: name.current.value,
  photoURL: "https://avatars.githubusercontent.com/u/137175240?v=4"
})
.then(() => {
  const {uid,email,displayName,photoURL} = auth.currentUser;
  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
  
})
.catch((error) => {
 
});

    email.current.value=null
    password.current.value=null
    setIsSignupForm(false)
    })
  .catch((error) => {
    const errorMessage = error.message;
    setErrMessage(errorMessage)
    
  });
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User details"+ user)
    
  })
  .catch((error) => {
   
    const errorMessage = error.message;
    setErrMessage(errorMessage)
  });
      }
  }

  return (
    <div className='h-lvh'>
      <Header/>
      <div className="absolute">
      <img src={BG_URL} alt="logo"/>
      </div>
      <div className="">
        <form action="" onSubmit={(e)=>e.preventDefault()} className=" absolute w-3/12 p-12  bg-black my-36 right-0 left-0 text-white mx-auto rounded-md bg-opacity-80 ">
          <h1 className="text-3xl font-bold py-4">{isSignupForm ? "Sign Up" : "Sign In"}</h1>
        
          {isSignupForm &&<input ref={name}type="text" placeholder="Name" className='p-4 my-4 w-full bg-gray-700'/>}
          {isSignupForm && <input ref={phone} type="number" placeholder="Phone number" className='p-4 my-4 w-full bg-gray-700'/>}
          <input ref={email} type="text" placeholder="Email address" className='p-4 my-4 w-full bg-gray-700'/>
          <input ref={password} type="password" placeholder="password" className='p-4 my-4 w-full bg-gray-700'/>
          <p className='text-red-700'>{errMessage}</p>
          <button className="rounded-lg bg-red-600 p-4 my-4 w-full" onClick={handleSigninClick}>{isSignupForm ? "Sign Up" : "Sign In"}</button>
        <p className='cursor-pointer' onClick={handleSignIn}>{isSignupForm ? "Already have an account?" : "New to Netflix? Sign up now."}</p>
        </form>
      </div>
    </div>
  )
}

export default Login;