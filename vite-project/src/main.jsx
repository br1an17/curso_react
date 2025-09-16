import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Boton } from './componentes/boton.jsx'
import { Form } from './componentes/form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Boton texto="Click me" color="lightblue" />
    <Form />
  </StrictMode>,
)
