import { Nav } from "./componentes/Nav/Nav.jsx";
import { Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./componentes/itemDetailContainer/itemDetailContainer.jsx";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { ItemListContainer } from "./componentes/itemListContainer/itemListContainer.jsx";
import { Card } from "./extras/card.jsx";
import { Footer } from "./extras/Footer/Footer.jsx";
import { CartProvider } from "./context/CartContext/CartProvider.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer titulo={"Bienvenido"} />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/dulce"
              element={<Card imagen="/public/images/enConstruccion.png" />}
            />
            <Route
              path="/category/salado"
              element={<Card imagen="/public/images/enConstruccion.png" />}
            />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
