import { useEffect, useState } from 'react'


function App() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>(
    window.addEventListener('resize',()=>setWidth(window.innerWidth))
  ),[])

  return (
    <>
      <div className="">{width}</div>
    </>
  )
}

export default App
