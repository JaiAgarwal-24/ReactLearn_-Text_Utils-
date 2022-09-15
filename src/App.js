import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');// weather dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#021e34';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      {/* <Navbar title= "TextUtils" aboutText = "About Us"/> */}
      <Navbar title= "TextUtils" mode={mode} toggleMode = {toggleMode}/>
      {/* <Navbar /> */}
      {/* <About/> */}
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </>
  );
}

export default App;
