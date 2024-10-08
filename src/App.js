// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('Light');
  const [alert,setAlert]=useState(null);
  const toggleHandler=()=>{
        if(mode==="Dark"){
          setMode('Light');
          document.body.style.backgroundColor='#f0f0f0';
          document.body.style.color='#282828';
          showAlert("Enabled light mode","Success");
          // document.title='Text Utils-LightMode';//dynamic title changing

        }else{
          setMode('Dark')
          document.body.style.backgroundColor='rgb(17 6 67)';
          document.body.style.color='#f0f0f0';
          showAlert("Enabled dark mode","Success");
          // document.title='Text Utils-DarkMode'; //dynamic title changing


        }
  }
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
      }
      
  return (
    <section >
    <Navbar title="TEXT UTILS" modes={mode} toggleMode={toggleHandler}/>
    <Alert alerted={alert}/>
    <Routes>
        
        <Route path="/" element={<TextForm shownAlert={showAlert} heading="Enter the text " modes={mode} head="Try TextUtils - Word Counter, Character Counter, Case Converter" />} />
        <Route path="#" element={<TextForm shownAlert={showAlert} heading="Enter the text " modes={mode} head="Try TextUtils - Word Counter, Character Counter, Case Converter" />} />
        <Route path="/about" element={<About modes={mode} />} />
    </Routes>
    {/* <TextForm shownAlert={showAlert} heading="Enter the text to analyze" modes={mode} /> */}
    {/* <About/> */}
    </section>
    
  );
}

export default App;
