import React,{useState} from 'react'


export default function TextForm(props) {

  const handleUpClick= ()=>{
    console.log("button clicked");
    setText(text.toUpperCase(text))
  }
  const handleLowerClick= ()=>{
    console.log("button clicked");
    setText(text.toLowerCase(text))
  }
  const handleClearClick=()=>{
    setText("");
  }
  const textHandler= (event)=>{
    console.log("button clicked");
    setText(event.target.value);
  }
  const [text, setText] = useState("")

  return (
    <>
    <h1>{props.title}</h1>
      <div className=" container mb-3">
       
        <textarea 
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={textHandler}
        >
        

        </textarea>
        <br></br>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Upper Case</button>
        <button className="btn btn-success mx-2" onClick={handleLowerClick}> Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Box</button>
        
      </div>
      <div className="container my-2" >
        <h1>Text Summary</h1>
        <i><p>Words are {text.split(" ").length}  and characters are   {text.length}</p></i>
       <b> <p>Time to Read:{text.split(" ").length*0.008}mins</p></b>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
