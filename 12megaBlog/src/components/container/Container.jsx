import React from 'react'

//continer accepts the property as children
//it is bsically a box
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'> 
      {children}
    </div>
  )
}

export default Container
