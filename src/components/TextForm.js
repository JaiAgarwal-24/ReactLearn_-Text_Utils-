import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleAlternatingClick = () => {
        let updatedText = '';
        for (let i=0; i<text.length; i++)
        {
            if (i%2 === 0)
            {
                updatedText += text[i].toUpperCase();
            }
            else
            {
                updatedText += text[i].toLowerCase();
            }
        }
        setText(updatedText);
    }

    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleAlternatingClick}>Convert to AlTeRnAtinG TeXt</button>
        </div>
        <div className="container my-2">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Mintues to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}