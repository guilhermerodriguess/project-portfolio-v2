import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import './defaultLayout.css'


function DefaultLayout({ children }) {
  return (
    <div className='default-layout'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
