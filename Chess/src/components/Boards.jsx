import React from 'react'
import './Board.css'
import Ranks from './bits/Ranks'
import Files from './bits/Files'
import Pieces from './Pieces/Pieces'

function Boards() {


    const getClassName = (i,j)=>{
        let c = "tile"
        c += (i+j+1)%2 === 0 ? " dark":" light"
        return c
    }
    const ranks = Array(8).fill().map((x,i)=> 8-i);
    const files = Array(8).fill().map((x,i)=> i+1)
  return (
    
    <div className='Board'>
        <Ranks ranks={ranks}/>
      <div className="tiles">
        {ranks.map((rank,i) => (
            files.map((file,j) =>(
                <div key={file + '_' + rank} className={getClassName(i,j)}></div>
            ))
        ))}
        <Pieces/>
      </div>
      
      <Files files={files}/>
      
    </div>
  )
}

export default Boards
