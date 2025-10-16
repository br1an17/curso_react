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
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    <Boton texto="Click me" color="lightblue" />
    <Form />
    <Item />
   
    <Card titulo="Card Title" descripcion="This is a description." imagen="/public/data/" /> 
   <Footer />
    </>
  )
}

export default App
