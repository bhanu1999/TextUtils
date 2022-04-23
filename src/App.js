// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// import TextForm from './components/TextForm';
// let name="Bhanu Prakash"
function App() {

  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      mssge:message,
      type:type

    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled Successfully","Success: ");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled Successfully","Success: ");

    }

  }
  const element_to_return=(
    <>
    <Navbar title='TextUtilsApp' mode={mode} toggle={toggleMode}/>  
    <Alert alert={alert}></Alert>
    <div className="container">
   <TextForm title="Enter a Text to Analyze Below" mode={mode} showAlert={showAlert}></TextForm>
   {/* <TextForm></TextForm> */}
   </div>

    

    </>
  );
  return element_to_return; 
}

export default App;
