import React from 'react';
import Navbar from './Navbar';
import Page1 from './Page1';
import Page3 from './Page3';
import Footer from './Footer';
import Page2 from './Page2';

const home = () => {
  return (
    <div>
      <Page1/>
      <Page2/>
      <Page3/>
    </div>
  );
}

export default home;
