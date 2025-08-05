import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/MyWork'
//import Services from './components/Services'
import './App.css'



function App() {

  return (
    <BrowserRouter>
    <div>
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/portfolio" element={<Portfolio />} /> 
     </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
