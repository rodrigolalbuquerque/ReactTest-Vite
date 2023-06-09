import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  )
}

export default App
