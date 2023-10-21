import React, {useState} from 'react'


export default function Textform(props) {
const handleUpclick=()=>{
  let newText=text.toUpperCase();
  setText(newText);
  text===""?props.showAlert("Text empty!","warning"):props.showAlert("Text converted to uppercase!","success")
  
}
const handleOnChange =(event)=>{
  setText(event.target.value)
}
const handledownclick=()=>{
  let newText=text.toLowerCase();
  setText(newText);
  text===""?props.showAlert("Text empty!","warning"):props.showAlert("Text converted to lowercase!","success")
}
const handleclearclick=()=>{
  let newText="";
  setText(newText);
}
const handlecopyclick=()=>{
  let newText=document.getElementById("exampleFormControlTextarea1");
  newText.select();
  navigator.clipboard.writeText(newText.value);
  text===""?props.showAlert("Text empty!","warning"):props.showAlert("Text copied to Clipboard!","success")
}

    const[text,setText] = useState("");
  return (
    <>
 <div className="container mx-6 my-4">

<div className="mb-3">

  <h2>{props.heading}</h2>
  <textarea className={`form-control my-4 bg-${props.mode==='dark'?'dark':'white'} text-${props.mode==='dark'?'white':'dark'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleUpclick}>Uppercase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handledownclick}>Lowercase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleclearclick}>Clear</button>
<button type="button" className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy</button>


 </div>

<div className="container my-2">
  <h3>Your Text Summary</h3>
  <p>{text.split(" ").length}    wards and {text.length}   characters</p>
  <p>{0.008 * text.split(" ").length} minutes</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:'Enter something in the textbox above to preview it.'}</p>
</div>
    </>
  )
}
