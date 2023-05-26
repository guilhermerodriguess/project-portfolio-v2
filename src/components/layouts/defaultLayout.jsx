import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar/navbar';
import Logo from '../logo/logo';
import './defaultLayout.css';

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <Navbar />
      {children}
      <Logo />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
