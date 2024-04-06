import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './Home/Navbar'
import Footer from './Home/Footer'
import SignIn from './User/SignIn'
import SighnUpHome from './User/SighnUpHome'

import SignUpIndividual from './User/SignUpIndividual.jsx'
import SignUpBusiness from './User/SignUpBusiness.jsx'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<SignIn />} />
        <Route path='/SighnUpHome' element={<SighnUpHome />} />
        <Route
          path='/SighnUpHome/SignUpIndividual'
          element={<SignUpIndividual />}
        />
        <Route
          path='/SighnUpHome/SignUpBusiness'
          element={<SignUpBusiness />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
