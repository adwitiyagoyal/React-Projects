import { useCallback, useState } from 'react'
import List from './List';

function App() {
  const [number,setNumber] = useState(0);
  const [dark,setDark] = useState(0);
  
  
  const theme = {
    backgroundColor: dark? '#333':'#FFF',
    color: dark? '#FFF':'#333',
    width:screen,
    height:screen
  }

  const getItems = useCallback((inc) => {
    return [Number(number+inc),Number(number+inc)+1,number+inc+2];
  },[number])

  return (
    <div style={theme}>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => (setDark((prev) => !prev))}> Toggle</button>

      <List getItem={getItems}/>
      
    </div>
  )
}

export default App
