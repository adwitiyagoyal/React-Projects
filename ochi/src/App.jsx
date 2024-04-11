import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'

function App() {


  return (
    <>
      <div className="w-screen h-screen  text-white">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eye/>
      
      </div>
    </>
  )
}

export default App
