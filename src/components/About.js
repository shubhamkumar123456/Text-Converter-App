import React, {useState} from "react";

export default function About() {
    const [myStyle, setMyStyle]= useState({
        color:"black",
        backgroundColor:"white"
    })

    const toggleStyle= ()=>{
        if(myStyle.color==="white"){
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
        }
        else{
            setMyStyle({
                color:"white",
                backgroundColor:"black"
            })
        }
    }


   
  return (
    <><div className="container" style={myStyle}>
    <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              About
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This is the application where you can edit or covert your text to upper or lower case , can remove extra white spaces, you can copy text, clear text. you can also count the characters and find the read time. you can also switch to dark or light mode
            </div>
          </div>
        </div>
        
       
       
   
      </div>
      <button className="btn btn-info my-2" onClick={toggleStyle}>Enable dark mode</button>
      </div>
    </>
    
  );
}
