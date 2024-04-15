import React,{ useState } from 'react'
import {ThemeProvider} from './ThemeContext'
import FunctionalContextComponent from './FunctionalContextComponent'

function App() {

  return (
    <>
      <ThemeProvider> 
        <FunctionalContextComponent/>
      </ThemeProvider>
    </>
  )
}

export default App
