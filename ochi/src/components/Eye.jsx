import React, { useEffect, useState } from 'react'


function Eye() {

  const [rotate,setRotate] = useState(0);

useEffect(()=>{
  window.addEventListener('mousemove',(e)=>{
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    console.log(mouseX);

    let deltaX = mouseX-window.innerWidth/2;
    let deltaY = mouseY-window.innerHeight/2;

    let angle = Math.atan2(deltaX,deltaY)*(180/Math.PI);
    setRotate(angle-180);
  })
})
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div className="w-full h-full bg-cover bg-center relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
          <div className=" absolute  flex gap-[6vw] -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2">
            <div className="w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center">
              <div className="relative bg-black h-3/5 w-3/5 rounded-full ">
                <div style={{transform:` translate(-50%,-50%) rotate(${rotate}deg)`}}  className="-translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 absolute w-full h-1/5 flex items-center  p-[0.1vw]">
                  <div className="h-[1.5vw] w-[1.5vw] rounded-full bg-white "></div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center">
              <div className="relative bg-black h-3/5 w-3/5 rounded-full ">
                <div style={{transform:` translate(-50%,-50%) rotate(${rotate}deg)`}}  className="-translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 absolute w-full h-1/5 flex items-center  p-[0.1vw]">
                  <div className="h-[1.5vw] w-[1.5vw] rounded-full bg-white "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Eye
