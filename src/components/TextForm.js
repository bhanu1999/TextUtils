import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase(text));
    props.showAlert("Converted to Upper case","Success: ");
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase(text));
    props.showAlert("Converted to Lower case","Success: ");

  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared","Success: ");

  };
  // const handleSpaceClick = () => {
    
  //   setText(text.trim());
  // };
  const textHandler = (event) => {
    // console.log("button clicked");
    setText(event.target.value);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword);
    props.showAlert("Converted to Title Case","Success: ");

}
  const [text, setText] = useState("");

  return (
    <>
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.title}</h1>
      <div className=" container mb-3 " style={{color:props.mode==='dark'?'white':'black'}}>
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={textHandler}
          
        ></textarea>
        <br></br>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>
          {" "}
          Convert to Upper Case
        </button>
        <button disabled={text.length===0}className="btn btn-success mx-2" onClick={handleLowerClick}>
          {" "}
          Convert to Lower Case
        </button>
        <button disabled={text.length===0}className="btn btn-success mx-2 my-1" onClick={capitalFirstLetter}>
          {" "}
        Title Case
        </button>
        <button disabled={text.length===0}className="btn btn-success mx-2 my-1" onClick={speak}>
          {" "}
        Speak
        </button>
        
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          {" "}
          Clear Box
        </button>
      </div>
      <div className="container my-2 my-1" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <i>
          <p>
            Words are {text.split(/\s+/).filter((element)=>{
              return element.length!==0;
            }).length} and characters are {text.length}
          </p>
        </i>
        <b>
          {" "}
          <p>Time to Read:{text.split(" ").filter((element)=>{
              return element.length!==0;
            }).length * 0.008}mins</p>
        </b>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
        {/* <h2>Frequencies</h2> */}
      </div>
    </>
  );
}
