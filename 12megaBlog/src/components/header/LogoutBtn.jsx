import React from 'react'
import {  useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'
function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        Logout
    </button>
  )
}

export default LogoutBtn
