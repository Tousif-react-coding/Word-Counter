import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React from 'react';





function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#123241'
      document.getElementsByClassName(".dk").style.backgroundColor = 'gray'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.getElementsByClassName(".dk").style.backgroundColor = 'white'

    }
  }

  return (
    <>
      <Navbar titles="Text Editor" mode={mode} toggleMode={toggleMode} />
      
  <div className="container my-3">
  <TextForm heading="Your Heading" mode={mode} />
      </div>
     
    </>
  );
}

export default App;
