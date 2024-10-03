import React,{useState} from 'react'

export default function About(props) {
    let myStyle ={
        color: props.modes.toLowerCase()==='dark'?'#e7e7e7':'#040432',
        backgroundColor: props.modes.toLowerCase()==='dark'?'#040432':'#e7e7e7',
        border: `1px solid ${props.modes.toLowerCase()==='dark'?'#e7e7e7':'#504a4a'}`
    }
    // const [btnText,setMsg]=useState("Dark");

    // const toggleStyle=()=>{
    //     if(myStyle.color==="black"){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white',
    //             borderRadius:'0.5rem'
                
    //         });
    //         setMsg('Light');
    //     }else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //         });
    //         setMsg('Dark');

    //     }
    // }

  return (
    <div className='container my-4 p-3 border-0 bg-transparent ' style={myStyle}>
        <h1 className="mx-5 my-3">About Us</h1>
        <div className="accordion p-5" id="accordionExample" >
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    <strong>Analyze Your text </strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                    </div>
                </div>
            </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>Free to use </strong>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={myStyle} >
                <strong>Browser Compatible </strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
            </div>
        </div>
    </div>
        {/* <button type="button" onClick={toggleStyle} className="btn btn-outline-dark my-3" style={myStyle}>{btnText}</button> */}
    </div>
  )
}
