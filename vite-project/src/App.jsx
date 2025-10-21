import { Nav } from './componentes/Nav/Nav.jsx'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './componentes/itemDetailContainer/itemDetailContainer.jsx'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { ItemListContainer } from './componentes/itemListContainer/itemListContainer.jsx'
import { Card } from './componentes/card.jsx'
import { Footer } from './componentes/Footer/Footer.jsx'

function App() {


  return (
    <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<ItemListContainer titulo={"Bienvenido"} />} />
    <Route path="/detail/:id" element={<ItemDetailContainer/>
    } />
     <Route path="/category/dulce" element={<Card imagen="/public/images/enConstruccion.png"/>} />
     <Route path="/category/salado" element={<Card imagen="/public/images/enConstruccion.png"/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
