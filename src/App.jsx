import React from 'react'
import About from './assets/comp/About'
import HomePage1 from './assets/comp/HomePage1'
import Contact from './assets/comp/Contact'
import Navbar from './assets/comp/Navbar'
import Footer from './assets/comp/Footer'
import Loader from './assets/comp/Loader'
import MoreProject from './assets/comp/MoreProject'
import { Route, Routes } from 'react-router-dom'
import Cursor from './assets/comp/Cursor'


const App = () => {
  return (
    <div className='cursor-none'>
      <Loader/>
      <Cursor/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage1/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<MoreProject/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App