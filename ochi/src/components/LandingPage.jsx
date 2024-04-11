import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

function LandingPage() {
    return (
        <div className=" w-full h-screen pt-1">
            <div className="textstructure mt-40 px-20">
                
                {["WE CREATE","EYE OPENING","PRESENTATIONS"].map((item, index)=>{
                    return <div className="masker">
                        <div className="flex w-fit items-center">
                        {index === 1 && (<div className='w-[7.5vw] h-[5.2vw] mt-[0.7vw] rounded-md   bg-green-500'></div>)}
                        <h1 className='text-[7.5vw] leading-none tracking-tighter font-semibold' >
                            {item}
                        </h1>
                        </div>
                    </div>    
                })}
            </div>
            <div className="border-t-2 border-zinc-600 mt-32 flex justify-between px-16 py-4">
                {["For public and private companies","From the first pitch to ipo"].map((item,index) => (
                    <p className='text-md font-dark tracking-tight'>{item}</p>
                ))}
                <div className="start flex gap-2  ">
                    <div className="px-4  py-1  border-[1px] border-zinc-500 rounded-full text-sm">
                        START THE PROJECT
                    </div>
                    <div className=" w-8 h-8  flex items-center justify-center border-[2px] border-zinc-500 rounded-full text-sm ">
                    <BsArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
//h-screen bg-zinc-900 pt-1