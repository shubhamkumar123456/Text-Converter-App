
import React, {useState} from 'react'



export default function Textform(props) {
  const [text, setText]= useState('')
  const handleUpclick = ()=>{
    console.log("upper case was clicked")
    let newText = text.toLocaleUpperCase()
    setText(newText)
    props.showAlert("converted to upperCase","Success")
  }
  const handleLoclick = ()=>{
    console.log("lower case was clicked")
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert("converted to LowerCase","Success")
  }
  const handleCopy = ()=>{
    console.log("copy button was clicked")
    
      navigator.clipboard.writeText(text);
      props.showAlert("text is copied successfully","Success")
  }
  const handleExtraSpace = ()=>{
    console.log("remove space button clicked")
    props.showAlert("extra spaces has been removed","Success")
    let newText = text.split(/[ ]+/);
    // let newText = text.split("  ");
    setText(newText.join(" "))
  }
  const handleClearclick = ()=>{
    console.log("clear text was clicked")
    props.showAlert("text cleared successfully","Success")
    let newText = ""
    setText(newText)
  }
  const handleOnchange = (event)=>{
    console.log("on change")
    setText(event.target.value)
 
  }
  return (
    <>
   
{/* <Navbar/> */}

<div className=" mb-1 containe" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 style={{backgroundColor:props.mode==='dark'?'#023020':'white'}}>{props.heading} </h1>
  <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'#023020':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnchange} rows="8" value={text}></textarea>
  <button disabled={text.length===0}   className="btn btn-success my-3 mx-1" onClick={handleUpclick}>Convert to upperCase</button>
  <button  disabled={text.length===0}  className="btn btn btn-success my-3 mx-1" onClick={handleLoclick}>Convert to LowerCase</button>
  <button  disabled={text.length===0}  className="btn btn btn-success my-3 mx-1" onClick={handleClearclick}>Clear Text</button>
  <button disabled={text.length===0}   className="btn btn btn-success my-3 mx-1" onClick={handleCopy} >Copy Text</button>
  <button  disabled={text.length===0}  className="btn btn btn-success my-3 mx-1" onClick={handleExtraSpace} >Remove extra space</button>
</div>
 
 <div className={`container`} style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>your text summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 *text.split(" ").length }minutes  read time</p>
  <h2>Preview</h2>
  <p>{text.length>0? text:"enter something to preview it"}</p>
 </div>
    </>
  )
}
