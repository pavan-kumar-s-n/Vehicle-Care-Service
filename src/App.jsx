import React from 'react'
import Home from './assets/Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nv from './assets/Components/Nv'
import Footer from './assets/Components/Footer'
import ForgotPassword from './assets/Components/ForgotPassword';

export default function App() {
  return (
    <div>
       <Nv/>
       <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/ForgotPassword' element={<ForgotPassword/>} />
        <Route path='/Nv' element={<Nv/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
