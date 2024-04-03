import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <h2>Login</h2>

            <input className=" text-black border-none outline-none bg-white p-2 m-4" type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'/>

            <input className="  text-black border-none outline-none bg-white p-2 m-4 mt-2" type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'/>

            <button className="outline-none m-4" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
