
import './App.css';
import Navbar1 from './fragments/Navbar1';
import Form from './fragments/Form';
import React,{useState} from 'react';
import Alerts from './fragments/Alerts';
import About from './fragments/About';

function App() {
 const [mode,setMode] = useState('light')
 const [alert,setAlert] = useState(null) 
 

 let toggleDarkLightBtn=()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0 0 0 / 79%)'
      showAlert('Dark made enabled:)')
    }else{
      setMode('light')
      document.body.style.backgroundColor='#ffecec'
      showAlert('Dark made disabled:)')
    }
 }
 let toggleDarkGreenBtn=()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#005b1a'
      showAlert('Dark-Green mode enabled:)')
    }else{
      setMode('light')
      document.body.style.backgroundColor='#ffecec'
      showAlert('Dark=Green mode disabled:)')
    }
 }
 let showAlert=(msg)=>{
  setAlert(msg);
  setTimeout(()=>{setAlert(null);},2000)
 }
 
  return (
   <>
   <Navbar1 mode={mode} toggleDarkLightBtn={toggleDarkLightBtn} toggleDarkGreenBtn={toggleDarkGreenBtn} />
   <Alerts alert={alert} />
   <Form mode={mode} showAlert={showAlert}/>
   <About />
    
   
   
   </> 
  );
}

export default App;
