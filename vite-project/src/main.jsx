import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Boton } from './componentes/boton.jsx'
import { Form } from './componentes/form.jsx'
import { Card } from './componentes/card.jsx'
import { Item } from './componentes/item/item.jsx'
import { Nav } from './componentes/item/nav/nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Nav/>
    <Boton texto="Click me" color="lightblue" />
    <Form />
    <Item />
    <Card titulo="Card Title" descripcion="This is a description." imagen="https://via.placeholder.com/150" /> 
  </StrictMode>,
)
