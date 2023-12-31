import React from 'react';

import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <button className='btn btn-sm'><a href="https://www.linkedin.com/in/basma-mahmoud-6a846225a" target='_blank' rel='noreferrer'>Work with me</a></button>
      </div>
    </div>
  </header>
};

export default Header;
