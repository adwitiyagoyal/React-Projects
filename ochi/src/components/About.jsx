import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-md rounded-tr-md text-black'>
      <h1 className='text-[3.5vw] leading-[3.5vw] tracking-normal'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full border-t-[1px] border-[#a1b562] mt-[3.5vw] flex">

            <div className="w-1/2">
                    <h1>Our approach:</h1>
                    <button className='text-white rounded-full pl-7 py-4 mt-[1.5vw] flex gap-[3vw] items-center'>
                        READ MORE
                        <div className=" w-2 h-2  bg-white rounded-full"></div>
                    </button>
                    </div>
                    <div className="w-1/2 h-[70vh]">
                        <img className='rounded-lg mt-3'  src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                    </div>
            </div>

    </div>
  )
}

export default About
