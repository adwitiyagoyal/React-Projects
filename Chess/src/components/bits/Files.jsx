import React from 'react'
import './Files.css'
function Files({files}) {
    const helper = (i)=>{
        return String.fromCharCode(i+96)
    }
  return (
    
    <div className='files'>
        {files.map((file) => (<span key={file}>{helper(file)}</span>))}
    </div>
   
  )
}

export default Files
