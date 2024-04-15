import React, { useEffect, useState } from 'react'

function List({getItem}) {
    const [item,setItem] = useState([]);
    useEffect(()=>{
        setItem(getItem(2));
        console.log('update')
    },[getItem])
  return (
    item.map((name) =>(
        <div>
            {name}
        </div>
    ))

  )
}

export default List
