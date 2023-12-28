import React, { useState } from 'react';
import './App.css';
import Button from './components/button';
import Text from './components/text';
import Image from './components/image';
import Navbar from './components/navbar';

function Layout() {
  const [isTextVisible, setTextVisible] = useState(false);
  const handleButtonClick = () => {
    setTextVisible(!isTextVisible);
  };
  return (
    <div className="App">
      <div className="Navbar-container">
        <Navbar className="navbar" />
      </div>
      <div className='body'>
        <div className='ButtonCont'>
            <Button onClick={handleButtonClick} buttonText={isTextVisible ? 'Hide Text' : 'Show Text'} />
        </div>
        <div className='TextCont'>
            <Text isVisible={isTextVisible} />
        </div>
        <div className="ImageContainer">
            <Image />
        </div>
      </div>
    </div>
  );
}

export default Layout;