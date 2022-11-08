import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <div className='h-[3.5em] bg-yellow-100 flex justify-around items-center overflow-hidden'>
            <h1 className='font-bold text-2xl'>URL Shortiner</h1>
            
            <div className='w-[60%] h-full flex justify-around items-center'>
                {/* Nav links */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/user/register">Register</NavLink>
            </div>
        </div>
    </>
  )
}

export default NavBar