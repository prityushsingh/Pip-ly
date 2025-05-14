import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
    const navigate = useNavigate();
  return (
  <nav className='py-5 flex justify-between items-center'>
    <Link>
    <img src="/logo2.png" className='h-16' alt='logo'/>
    </Link>

    <div>
        <Button onClick = { ()=> navigate("/auth")}>Login</Button>
    </div>
  </nav>
  );
}

export default Header