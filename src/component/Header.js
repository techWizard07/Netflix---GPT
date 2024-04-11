import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from'../utils/firebase'
import{useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { removeUser } from '../utils/userSlice';

function Header() {
const navigate=useNavigate();
const user=useSelector(store=>store.user)
const dispatch=useDispatch()
  const handleSignout=()=>{
    signOut(auth)
.then(() => {
  dispatch(removeUser())
navigate('/')
}).catch((error) => {
  navigate('/error')    
});
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" className=" w-44" />
        {user && <div className='flex gap-3 p-4'>
          <img src={user.photoURL} alt="" className="h-[35px]" />
          <p className="h-[5px] cursor-pointer" onClick={handleSignout}>sign out</p>
        </div>}
    </div>
    
  )
}
export default Header
