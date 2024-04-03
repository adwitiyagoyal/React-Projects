import React from 'react'

function LandingPage() {
    return (
        <div className=" w-full h-screen pt-1">
            <div className="textstructure mt-40 px-20">
                
                {["WE CREATE","EYE OPENING","PRESENTATIONS"].map((item, index)=>{
                    return <div className="masker">
                        <h1 className='text-[7.5vw] leading-none tracking-tighter font-semibold' >
                            {item}
                        </h1>
                    </div>
                })}
            </div>
            <div className="border-t-2 mt-32"></div>
        </div>
    )
}

export default LandingPage
//h-screen bg-zinc-900 pt-1