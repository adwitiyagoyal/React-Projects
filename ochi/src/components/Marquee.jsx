import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
   
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-400 flex justify-center items-center gap-10 overflow-hidden whitespace-nowrap ">
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity, duration:5}} className='text-[18vw] tracking-tighter leading-none uppercase -mt-[3vw] font-bold'> we are ochi </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity, duration:5}} className='text-[18vw] tracking-tighter leading-none uppercase -mt-[3vw] font-bold'> we are ochi </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity, duration:5}} className='text-[18vw] tracking-tighter leading-none uppercase -mt-[3vw] font-bold'> we are ochi </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity, duration:5}} className='text-[18vw] tracking-tighter leading-none uppercase -mt-[3vw] font-bold'> we are ochi </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
