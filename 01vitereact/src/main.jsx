import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
      <h1>Custom app || chai</h1>
    </>
  )
}
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// } NOT WORKING BECAUSE IT IS RANDOM AND CUSTOMIZED BY US

//REAL PROCESS
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit goggle'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    reactElement
  
)
