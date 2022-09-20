import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!", 'success');
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", 'success');
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
        props.showAlert("Converted to AlTeRnAtinG TeXt!", 'success');
    }

    const [text, setText] = useState('');
    // setText("new text");
    return (
        <>
        <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'}`}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? props.darkcolor: props.lightColor, color: props.mode === 'dark'?'white':'#021e34'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleAlternatingClick}>Convert to AlTeRnAtinG TeXt</button>
        </div>
        <div className={`container my-2 text-${props.mode === 'light'?'dark':'light'}`}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter(word => word !== '').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter(word => word !== '').length} Mintues to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}