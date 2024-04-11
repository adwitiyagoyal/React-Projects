import { useEffect, useRef, useState } from 'react'


function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(0); //useref gives object

  useEffect(()=>{
    renderCount.current = renderCount.current+1;
  })

  const prevName = useRef();

  useEffect(()=>{
    prevName.current = name
  },[name])


  const nameFromref = useRef();
  function value_input(){
     console.log(nameFromref.current) //give tag name and type
     console.log(nameFromref.current.value) //give value
    
  }


  return (
    <>
    <input ref={nameFromref} type="text" onChange={e => setName(e.target.value)} />
    <div className="">{name} previous{prevName.current}</div>
     <button onClick={value_input}>console</button>
    </>
  )
}

export default App
