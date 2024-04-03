import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter,setCounter] = useState(5);

  function addValue(){
    console.log("value added", Math.random());
    // counter ++;
    setCounter(counter+1);
    
  }

  const removeValue = ()=>{
    console.log("value subtracted", Math.random());
    counter -= 1;
    if(counter < 0){
      console.log("you have reached to 0")
      counter = 0
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h3>Counter value : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
