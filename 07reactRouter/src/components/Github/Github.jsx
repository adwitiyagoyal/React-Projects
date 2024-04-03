import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    //ANOTHER AND OPTIMIZED WAY USING LOADER
    const data = useLoaderData()
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/adwitiyagoyal')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
    return (
        <>
            <div className=" border-none outline-none text-yellow-900 my-2 px-2.5 flex flex-wrap-reverse justify-center items-center">
                <img src={data.avatar_url} alt = "Git-profile" height={300} width={300}/>
                <h1><b>Github Bio</b> : {data.bio}</h1>
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/adwitiyagoyal')
    return response.json();
}
