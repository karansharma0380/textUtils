import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText("new Text"); // Correct way to change the state

    const handleUpClick = ()=> {
       // console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
       // console.log("On change");
        setText(event.target.value);
        
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearTxt = ()=> {
        let newText = "";
        setText(newText);
    }

   

  return (
    <>
    <div className="container1" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}  </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: 
                props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-primary me-2">Convert to UpperCase</button>  
            <button type="button" onClick={handleLowClick} className="btn btn-success me-2">Convert to LowerCase</button>
            <button type="button" onClick={clearTxt} className="btn btn-info">Clear Text</button>
            
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your summary</h1>
        <p>{text.split(" ").length-1} words {text.length} characters </p>
        <p>{0.08 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
