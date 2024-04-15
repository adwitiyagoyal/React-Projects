import { useState,useReducer } from 'react'
import { initGameState } from './Constant'
import './App.css'
import Boards from './components/Boards'
import AppContext from './contexts/Context'
import { reducer } from './reducer/reducer'

function App() {
  
  
  const [appState, dispatch] = useReducer(reducer,initGameState);



  const providerState = {
    appState,
    dispatch
  } 
  return (
      <AppContext.Provider value={providerState}>
        <div className="App">
          <Boards/>
        </div>
      </AppContext.Provider>

    
  )
}

export default App
