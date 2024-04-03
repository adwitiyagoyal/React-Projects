import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    username: "Ag",
    age: 19
  }
  let newArr = [1,2,3,4]

  return (
    <> 
      <h1 className='bg-green-400 text-black rounded-xl p-3'>Tail</h1>
      <Card channel="chai" btntext="visit" someObj = {myobj} array = {newArr}/>
      <Card channel="goyal" btntext="click"/>
      <Card/>
    </>
  )
}

export default App
