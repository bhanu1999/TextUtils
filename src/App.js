// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

// import TextForm from './components/TextForm';
// let name="Bhanu Prakash"
function App() {
  const element_to_return=(
    <>
    <Navbar title='TextUtilsApp'/>  
    <div className="container">
   {/* <TextForm title="Enter a Text to Analyze Below"></TextForm> */}
   <About></About>
   </div>

    

    </>
  );
  return element_to_return; 
}

export default App;
