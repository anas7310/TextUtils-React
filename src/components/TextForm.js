import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Successfully coverted to Upper Case!","success");
    }

    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Successfully coverted to Lower Case!","success");
    }

    const handleDelete = ()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText="";
        setText(newText);
        props.showAlert("Text Deleted Successfully!","success")
    }

    const handleOnChange = (event)=>{
        console.log("On Changed");
        setText(event.target.value);
    }

    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }

    const [text, setText] = useState();
    // text="new text"; //Wrong way to change the state
    // setText(" new Text "); //Correct way to change the state

    return (
    <>
    <div className="container" style = {{color: props.mode === 'dark'?'white':'black'}}>
    <h2>{props.heading}
    </h2>
        <div className="mb-3">
        <textarea className="form-control" value = {text} style = {{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleDelete}>Delete Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style = {{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>       
        <p>{text?.split(' ')?.length} words and {text?.length} characters</p> 
        <p>{0.008 * text?.split(' ')?.length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
