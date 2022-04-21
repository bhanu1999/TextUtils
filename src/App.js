// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// import TextForm from './components/TextForm';
// let name="Bhanu Prakash"
function App() {

  const [mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }

  }
  const element_to_return=(
    <>
    <Navbar title='TextUtilsApp' mode={mode} toggle={toggleMode}/>  
    <div className="container">
   <TextForm title="Enter a Text to Analyze Below" mode={mode}></TextForm>
   {/* <TextForm></TextForm> */}
   </div>

    

    </>
  );
  return element_to_return; 
}

export default App;
