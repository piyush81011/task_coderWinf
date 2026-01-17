import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className=''>
      <ul className='flex list-none p-5 items-center'>
        <li className='pl-5 font-bold text-xl'>Exclusive</li>
        <div className='flex ml-auto'>
          <li className='pl-5'><Link to="/">Home</Link></li>
          <li className='pl-5'>Contact</li>
          <li className='p-5'>About</li>
          <li className='p-5'><Link to="/register">Sign Up</Link></li>
        </div>
      </ul>
    </div>
  )
}

export default Nav