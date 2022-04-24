import React,{useState} from "react";

export default function About() {
    const [btntext,setBtnText]=useState("Enable Dark Mode");
    const [mystyle,setStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    function toggeleStyle(){
        console.log("toggle clicked");
        if(mystyle.color==='white')
        {
            setStyle({
                color:'black',
                backgroundColor:'white'
            });
            setBtnText("Enable Dark Mode")
        }
        else{
            setStyle({
                color:'white',
                backgroundColor:'black',
                border:'2px'
            });
            setBtnText("Enable Light Mode")
        }
    }
  return (
    <>
      <div className="container my-3"  style={mystyle}>
          <h1>About Us</h1>
        <div className="accordion my-3" id="accordionExample" style={mystyle}>
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                <strong>Who am I?</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={mystyle}>
                I am Software Engineer working on Full Stack Applications.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle}
              >
                <strong>Contact Me.</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={mystyle}>
                <a href="https://www.linkedin.com/in/bhanu-prakash-sakinala/">LinkedIn</a><br/>
                <strong>Mobile:7730944736</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                <strong>Why to Use this Application</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={mystyle}>
                This Application allows you to analyze the text you have entered and it also allows you to perform text utility functions
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
        <button className="btn btn-dark" onClick={toggeleStyle }>{btntext}</button>
        </div>
      </div>
    </>
  );
}
