import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handlelowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>{
        setText("");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text ,setText] =useState('Enter text here');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2"onClick={handlelowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2"onClick={handleClearClick}>Clear Text</button>


        </div>
        <div className="container" my-3="True" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Character </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textboc above to preview here"}</p>
        </div>
        </>
    )
}
