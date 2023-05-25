import React from 'react';
import Navbar from '../navbar/navbar';
import Logo from '../logo/logo';
import './defaultLayout.css'


function DefaultLayout({ children }) {
  return (
    <div className='default-layout'>
      <Navbar />
      {children}
      <Logo />
    </div>
  );
}

export default DefaultLayout;
