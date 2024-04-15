import React, { useContext } from 'react'
import { useTheme,useToggle } from './ThemeContext';

function FunctionalContextComponent() {

    const toggle = useToggle();
    const dark = useTheme();
    const theme = {
        backgroundColor: dark? 'red':'yellow',
        color: dark? 'yellow':'red',
        width:screen,
        height:screen
      }
  return (

    <div style={theme}>
        <button onClick={toggle}></button>
    </div>
  )
}

export default FunctionalContextComponent
