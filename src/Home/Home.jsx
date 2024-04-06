import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SignUpIndividual from '../User/SignUpIndividual.jsx'
import SignUpBusiness from '../User/SignUpBusiness.jsx'
import SignIn from '../User/SignIn'
import SighnUpHome from '../User/SighnUpHome'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='sign-in-container'>
        <SignUpIndividual />
      </div>

      <Footer />
    </div>
  )
}

export default Home
