import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpclick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = () => {
        // console.log("loweercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearclick = () => {
        // console.log("loweercase was clicked");
        let newText = '';
        setText(newText);
    }
    const handleCopyclick = () => {
        // console.log("loweercase was clicked");
        var text =document.getElementById("examp")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleSpacesclick = () => {
        // console.log("loweercase was clicked");
        let newtext = text.split(/[ ] +/);
        setText(newtext.join([""]));
    
    }
    const handleOnChange = (event) => {
        //F console.log("change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // setText('new text');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="examp" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}  >Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoclick}  >Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearclick}  >Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyclick}  >Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleSpacesclick}  >Remove Extra spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Text Summary</h1>
                <p>{text.length}no of characters</p>
                <p>{text.split(" ").length}no of words</p>
                <p>{0.008 * text.split(" ").length} total minutes to read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

