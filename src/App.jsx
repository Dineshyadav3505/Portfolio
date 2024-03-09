import React from 'react'
import Page1 from './assets/comp/Page1'
import Footer from './assets/comp/Footer'
import Page3 from './assets/comp/Page3'
import HomePage1 from './assets/comp/HomePage1'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from './assets/comp/Navbar'
import About from './assets/comp/About'
import Resume from './assets/comp/Contact'
import Page2 from './assets/comp/Page2'



const App = () => {
  

  return (
    <div>
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Footer/>
    </div>
  )
}

export default App