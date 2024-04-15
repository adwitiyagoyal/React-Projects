import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export function BookLayout() {
    return (
        <>
            <Link to="/books/1">BOOKS1</Link>
            <br />
            <Link to="/books/2">BOOKS2</Link>
            <br />
            <Link to="/books/new">NEWBOOK</Link>
            <br />
            <Outlet context={{hello:"world"}} /> 
            {/* // i can use this context any whern in app.jsx inside the wrapper */}
        </>
    )
}


