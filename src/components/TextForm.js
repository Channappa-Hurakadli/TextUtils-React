import React,{useState} from 'react'
import PropType from 'prop-types';


export default function TextForm(props) {
    const [text,setText]=useState("Enter the text");
    // text="new Text"; wrong way
    // setText("new text");//correct way
    const handleClick=(evt)=>{
        if(evt.target.innerText === "Uppercase"){
            setText(text.toUpperCase());
            props.shownAlert("Converted to Uppercase","Success");
        }else if(evt.target.innerText === "Lowercase"){
            setText(text.toLowerCase());
            props.shownAlert("Converted to Lowercase","Success");

        }else if(evt.target.innerText === "Capitalize"){
            setText(capitalizeEachWord(text));
            props.shownAlert("Capitalized Each Word","Success");

        }else if(evt.target.innerText === "Clear"){
            setText("");
            props.shownAlert("Text area is cleared","Success");

        }
        
    }
    const capitalizeEachWord = (str) => {
        return str.split(" ").map(word=>word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(" ");
    }
    
    const handleOnChange=(evt)=>{
        // console.log("text changed");
        setText(evt.target.value);
    }
  return ( 
    <div className='container'>
        <div className="mb-3">
            <h1 className='my-3'>{props.head}</h1>
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.modes==='Dark'?'darkgray':'white'}}>{props.heading}</textarea>
            <button className="btn btn-outline-primary my-2 mx-2" onClick={handleClick}>Uppercase</button>
            <button className="btn btn-outline-primary my-2 mx-2  " onClick={handleClick}>Lowercase</button>
            <button className="btn btn-outline-primary my-2 mx-2 " onClick={handleClick}>Capitalize</button>
            <button className="btn btn-outline-primary my-2 mx-2 " onClick={handleClick}>Clear</button>
        </div>
        <div className='container'>
            <h2>Your text summary</h2>
            <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p>
            <p>{text===""?0:(0.008*text.split(" ").length).toFixed(3)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length!=0?text:"Enter text to preview"}</p>
        </div>
    </div>
  )
}

TextForm.defaultProps={
    heading:"Enter your text"
};
