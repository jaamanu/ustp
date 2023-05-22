import { useState } from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import TestimonialSection from './components/TestimonialSection';
import AboutCard from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import Login from './components/Login';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Main/>
        <AboutCard/>
        <TestimonialSection/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
