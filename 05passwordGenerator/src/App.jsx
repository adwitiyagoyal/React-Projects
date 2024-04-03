import { useState,useCallback,useEffect,useRef } from 'react' 
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("")

  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*(){}[]<>?/"
    for(let i=1;i<= length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char);
      pass += str.charAt(char)
    }
    setPassword(pass) 
  }, [length,numberAllowed,charAllowed,setPassword]);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select() //for selecting whole password
    passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  },[password])

  
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>

    <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700 text-center">
      Password generator

      <div className=" outline-none border-none flex shadow rounded-lg overflow-hidden w-full mb-4 my-2">
        <input type="text" value={password} className=" outline-none w-full  px-3 text-center py-2"placeholder='Password' ref={passwordRef} readOnly />
        <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3  shrink-0'>Copy</button>
      </div>

       <div className="flex text-sm gap-x-2 space-x-5">

          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setlength(e.target.value)}/>
            <label >Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }} />
            <label> Number</label>

          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }} />
            <label> Character</label>

          </div>

       </div>
    </div>
    </>
  )
}

export default App
