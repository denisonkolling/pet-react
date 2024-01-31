import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Adestramento from './components/Adestramento'
import Passeios from './components/Passeios'
import TaxiPet from './components/TaxiPet'
import Depoimentos from './components/Depoimentos'

function App() {
  

  return (
    <>
    <div className='container'>
     <Navbar />
     <Carousel />
     <Passeios />
     <Adestramento />
     <TaxiPet />
     <Depoimentos />
     </div>
    </>
  )
}

export default App
