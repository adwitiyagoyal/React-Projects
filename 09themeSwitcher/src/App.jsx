import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  //GIVING functionalities to function defined in theme.js
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const html = document.querySelector('html').classList;
    html.remove("light", "dark");
    html.add(themeMode)
  }, [themeMode])
  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                      <div className="w-full">
                          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                              <ThemeBtn/>
                          </div>

                          <div className="w-full max-w-sm mx-auto">
                            <Card/>
                          </div>
                      </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
