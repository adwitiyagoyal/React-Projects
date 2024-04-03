import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-green-100 border-none outline-none py-2'>user: {userid}</div>
    )
}

export default User
