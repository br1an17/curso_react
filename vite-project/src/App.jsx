import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Boton } from './componentes/boton.jsx'
import { Form } from './componentes/form.jsx'
import { Card } from './componentes/card.jsx'
import { Item } from './componentes/item/item.jsx'
import { Header } from './componentes/Header/Header.jsx'

import { Footer } from './componentes/footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Header />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    <Boton texto="Click me" color="lightblue" />
    <Form />
    <Item />
   
    <Card titulo="Card Title" descripcion="This is a description." imagen="https://via.placeholder.com/150" /> 
   <Footer />
    </>
  )
}

export default App
