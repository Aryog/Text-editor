import React, {useState} from 'react'

export default function Textfile(props) {
    const handleHIGHbtn = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLOWbtn =()=>{
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    const handleClear =()=>{
        setText("");
    }
    const handleCopy=()=>{
        let copyText = document.getElementById("MyBox");
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleSpaces=()=>{
        let newText=text.replace(/\s+/g," ");
        setText(newText);
    }
    const [text,setText] = useState("Enter the text here.");
    return (
        <>
        <div className={`mb-4 text-${props.Wmode==="dark"?"light":"dark"}`}>
        <h1>{props.heading}</h1>
            <label htmlFor="MyBox" className="form-label">Text Here</label>
            <textarea className="form-control" value={text} style={{backgroundColor: props.Wmode==="dark"?"#212529":"white", color :props.Wmode==="dark"?"white":"black"}} onChange={handleChange} id="MyBox" rows="6"></textarea>
            <button className="btn btn-primary mx-2 my-2" onClick={handleHIGHbtn}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLOWbtn}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove unwanted spaces</button>
        </div>
        <div className={`conatiner my-4 text-${props.Wmode==="dark"?"light":"dark"}`}>
        <h2>Your Text Summary.</h2>
        <p>Number of words are: {text.length===0?"0":text.trim().split(/\s+/).length}&nbsp; Number of characters are: {text.length}<br/>
        You can read it in {0.008.toFixed(2)*text.split(" ").length} minutes on <b>average</b>.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
</>
    )
}
