import React,{useState} from 'react'
// import Zoom from 'react-reveal/Zoom';

export default function Form({mode,showAlert}) {

    const[text , setText]=useState('')
    
    let changingInput =(e) =>{
        setText(e.target.value) 
    }
    let convertToUP =()=>{
        setText(text.toUpperCase())
        showAlert('Text has been converted to Uppercase')
    }
    let convertToLow =()=>{
        setText(text.toLowerCase());
        showAlert('Text has been converted to Lowercase')
    }
    let clearText =()=>{
        setText('')
        showAlert('All text has been Cleared..!')
    }
    let deleteText =()=>{
        setText(text.slice(0,-1))
    }
    let copyText =()=>{
       navigator.clipboard.writeText(text)
       showAlert('All text has been Copied..!')
    }
  return (
    <>
    <div className='container'>
    {/* <Zoom left cascade> */}
    <h1 className='text-center my-3 form-heading' style={{color: mode === 'light'? 'black':'white'}}>TEXT-CONVERTOR</h1>
    {/* </Zoom>
    <Zoom right cascade> */}
    <textarea style={{color: mode === 'light'? 'black':'white', backgroundColor: mode === 'light'? 'white':'grey'}} className='form-control my-3' onChange={changingInput} value={text} name='input' placeholder='Enter text here..' rows='8'></textarea>
    {/* </Zoom>
    <Zoom bottom cascade> */}
    <button className='btn btn-primary my-2 mx-3' onClick={convertToUP}>Convert to UpperCase</button>
    <button className='btn btn-primary my-2 mx-3' onClick={convertToLow}>Convert to LowerCase</button>
    <button className='btn btn-primary my-2 mx-3' onClick={clearText}>Clear Text</button>
    <button className='btn btn-primary my-2 mx-3' onClick={deleteText}>Delete Text</button>
    <button className='btn btn-primary my-2 mx-3' onClick={copyText}>Copy Text</button>
    {/* </Zoom> */}
    </div>
    <div className='container'>
        <h2 style={{color: mode === 'light'? 'black':'white'}}>Your text has Characters : {text.length}</h2>
         
    </div>
    </>
  )
}
