import { Nav } from './componentes/Nav/Nav.jsx'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './componentes/itemDetailContainer/itemDetailContainer.jsx'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { ItemListContainer } from './componentes/itemListContainer/itemListContainer.jsx'

function App() {


  return (
    <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/detail/:Id" element={<ItemDetailContainer/>
    } />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
