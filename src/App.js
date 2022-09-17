import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');// weather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const [modeColors, setModeColors] = useState({
    col1: '#400D51',
    col2: '#645CAA',
    col3: '#0F3460',
    col4: '#42032C',
    col5: '#2A0944'
  });

  const [darkModeColor, setDarkModeColor] = useState('#021e34');
  const [lightModeColor, setLightModeColor] = useState('white')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = darkModeColor;
      showAlert("Dark mode has been enabled", "success");
      setModeColors({
        col1: '#B1B2FF',
        col2: '#F5EDDC',
        col3: '#B2A4FF',
        col4: '#EAF6F6',
        col5: '#FF7396'
      });

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = lightModeColor;
      showAlert("Light mode has been enabled", "success");
      setModeColors({
        col1: '#400D51',
        col2: '#645CAA',
        col3: '#0F3460',
        col4: '#42032C',
        col5: '#2A0944'
      });
    }
  }

  const changeModeColor = (color) => {
    if (mode === 'light') {
      setDarkModeColor(color);
    }
    else {
      setLightModeColor(color);
    }
  }

  return (
    <>
      <Router>
        {/* <Navbar title= "TextUtils" aboutText = "About Us"/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} colorMode={modeColors} changeColor={changeModeColor} />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/about" element = {<About />}>
          </Route>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
