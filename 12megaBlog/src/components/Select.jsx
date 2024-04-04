import React, { useId } from 'react'

function Select({
    options,
    label,
    className, // HW => classname should contain empty strings better practise so that if it does not have any value it will notcause error 
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
       {label && <label htmlFor={id} className=''></label>}
        <select 
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>

                {/* ? denotes optionally map becausenif options have values then it will work otherwise it will crash */}
                {options?.map((option) => {
                    <option key={option} value={option}></option>
                })}

        </select>
    </div>
  )
}

//ANOTHER WAY OF USING FORWARD REF FIRST WAY USE IN INPUT.JSX
export default React.forwardRef(Select)
