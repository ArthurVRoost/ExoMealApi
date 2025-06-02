import { useState } from 'react'

import './App.css'
import Content from './pages/content/Content'
import Details from './pages/details/Details'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/recipe/:id" element={<Details />} />
      </Routes>
      
    </>
  )
}

export default App
