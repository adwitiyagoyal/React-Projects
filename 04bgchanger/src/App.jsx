import {useState} from "react"

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen  duration-200"
      style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">
            <button onClick = {() => setcolor("red")}className="outline-none border-none px-4 rounded-full py-1" style={{backgroundColor: "red"}}>Red</button>
            <button onClick = {() => setcolor("green")}className="outline-none border-none px-4 rounded-full py-1" style={{backgroundColor: "green"}}>Green</button>
            <button onClick = {() => setcolor("blue")}className="outline-none border-none px-4 rounded-full py-1" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick = {() => setcolor("cyan")}className="outline-none border-none px-4 rounded-full py-1" style={{backgroundColor: "cyan"}}>Cyan</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
