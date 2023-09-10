import React,{useState} from 'react';


export default function Form(props) {
    const [text,newText]=useState("");

    let textUpcase=()=>{
        let Uppercase=text.toUpperCase();
        newText(Uppercase);
        props.showAlert("Text is now UPPERCASE","success");
    }

    let textLowcase=()=>{
        let Lowercase=text.toLowerCase();
        newText(Lowercase);
        props.showAlert("Text is now lowercase","success");
    }

    let textSencase=()=>{
        // My Name is Poorv
        let split=text.split(" ");  //["My","Name","is","Poorv"]
        let array=[];     //["my","name","is","poorv"]
        for(let i=0;i<split.length;i++){
            array.push(split[i].toLowerCase());
        }
        let ans=array[0].charAt(0).toUpperCase() + array[0].slice(1)
        array[0]=ans;
       let string=array.join(" ");
        newText(string)
        props.showAlert("Text is now Senten case","success");
    }

    let textTitcase=()=>{
         // My Name is Poorv
         let split=text.split(" ");  //["My","Name","is","Poorv"]
         let array=[];     //["my","name","is","poorv"]
         let array2=[]     //["My","Name","Is","Poorv"]
         for(let i=0;i<split.length;i++){
             array.push(split[i].toLowerCase());
         }
         for(let i=0;i<array.length;i++){
            array2.push(array[i][0].toUpperCase() + array[i].slice(1))
         }
         let string=array2.join(" ");
         newText(string);
         props.showAlert("Text is now Title Case","success");
    }

    let copyText=()=>{
        let text=document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text has been copied","success");
    }

    let removespace=()=>{
        let text1=text.split(/[ ]+/);
        newText(text1.join(" "))
        props.showAlert("Text is now without Exra spaces","success");
    }

    // let getLocation=()=>{
    //     fetch("https://ipapi.co/json/")
    //     .then((response)=> response.json())
    //     .then((data)=> {
    //         console.log(data)
    //         console.log(data.latitude,data.longitude)
    //     })
    //     props.showAlert("Your location is on cosole","success");

    // }

    let textClear=()=>{
        newText("");
        props.showAlert("Text is clear","success");
    }

    let textOnchange=(event)=>{
        newText(event.target.value);  // you will change the textarea using onchange method
    }

    return (
        <>
        <div className="container mt-4" style={{color:props.mode==="light"?"black":"white"}}>
                <h2>{props.title}</h2>
                <textarea className="form-control" rows="7" style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} id="myText" value={text} onChange={textOnchange}></textarea>
                <button type="button" className="btn btn-primary mt-3" onClick={textUpcase}>UPPERCASE</button>
                <button type="button" className="btn btn-warning mt-3 mx-1" onClick={textLowcase}>lowercase</button>
                <button type="button" className="btn btn-primary mt-3" onClick={textSencase}>Sentence case</button>
                <button type="button" className="btn btn-warning mt-3 mx-1" onClick={textTitcase}>Title Case</button>
                <button type="button" className="btn btn-primary mt-3" onClick={copyText}>CopyText</button>
                <button type="button" className="btn btn-warning mt-3 mx-1" onClick={removespace}>RemoveSpace</button>
                <button type="button" className="btn btn-primary mt-3 mx-1" onClick={textClear}>Clear</button>
                {/* <button type="button" className="btn btn-warning mt-3" onClick={getLocation}>Get Location</button> */}
        </div>

        <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
            <h3 className='mt-3'>Text Summary</h3>
            
            <p>Words: {text.trim() === '' ? 0 : text.match(/\S+/g).length} and Characters: {text.length}</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Your text Preview Will be here...!"}</p>

        </div>
        </>
        
    )
};
