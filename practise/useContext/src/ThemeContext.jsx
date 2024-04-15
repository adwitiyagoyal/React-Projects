import React, { useContext,useState } from 'react'

const ThemeContext = React.createContext();
const ThemeToggle = React.createContext();

//creating custom hook so that user can use dark and toggle in functionalcontextcomponent.jsx

export function useTheme(){
    return useContext(ThemeContext);
}

export function useToggle(){
    return useContext(ThemeToggle);
}

export function ThemeProvider({children}) {

    const [dark,setDark] = useState(false);

    function toggle(){
        setDark((prev) => !prev);
    } 

  return (
    <div>
        <ThemeContext.Provider value={dark}>
            <ThemeToggle.Provider value={toggle}>

                {children}
                
            </ThemeToggle.Provider>
        </ThemeContext.Provider>
      
    </div>
  )
}


