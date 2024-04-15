import { useState } from 'react'
import { Home } from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Book } from './pages/Book'
import { Link } from 'react-router-dom'
import { BookList } from './pages/BookList'
import { NewBook } from './pages/NewBook'
import { BookLayout } from './BookLayout'

function App() {
  

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/books">BOOK</Link></li>
          <li><Link to="/crook">CROOK</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<BookList/>}/>
       
        <Route path='/books' element={<BookLayout/>}>
          <Route path=':id' element={<Book/>}/>
          <Route path='new' element={<NewBook/>}/>
        </Route>
        <Route path="*" element={<h1>NOT FOUND</h1>}/>
      </Routes>
      
    </>
  )
}

export default App
