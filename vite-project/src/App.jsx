import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Boton } from './componentes/boton.jsx'
import { Form } from './componentes/form.jsx'
import { Card } from './componentes/card.jsx'
import { Header } from './componentes/Header/Header.jsx'

import { Footer } from './componentes/footer/footer.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
   <BrowserRouter>
   <Nav/>
   <Routes></Routes>
   </BrowserRouter>
    </>
  )
}

export default App
