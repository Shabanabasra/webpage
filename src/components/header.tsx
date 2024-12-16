import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
    return (
      <header className='header'>
        <h1 className='logo'>Watch World</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/watches">Watches</Link>
          <Link href="/contact">Contact</Link>
          <FaShoppingCart style={{color: "white", fontSize:"25px"}}/>
        </nav>
      </header>
    );
  };
  
  export default Header;