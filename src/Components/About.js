import React,{useState} from 'react'    

export default function About(props) {
    return (
        <div className='container my-4'>
            <h1 style={{color:props.mode==="light"?"black":"white"}} className='mb-2'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{background:props.mode==="light"?"white":"rgb(90,127,190)",color:props.mode==="light"?"black":"#fff"}}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{background:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"#fff"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           TextUtils gives you a way to analyze your text quickly and efficiently.Be it Word count, Character Count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{background:props.mode==="light"?"white":"rgb(90,127,190)",color:props.mode==="light"?"black":"#fff"}}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{background:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"#fff"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count 
                            statistics for a given text. TextUtils reports a number of words and Characters. Thus it is 
                            suitable for writing text with word / character limit. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{background:props.mode==="light"?"white":"rgb(90,127,190)",color:props.mode==="light"?"black":"#fff"}}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{background:props.mode==="light"?"white":"#343a40",color:props.mode==="light"?"black":"#fff"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           This word counter software works in any web Browsers such as Chrome, Firefox, Internet Explorer, Saafari, Opera. It 
                           suits to count characters in facebook, blog, books, excel documents, pdf documents, eaasay etc
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

