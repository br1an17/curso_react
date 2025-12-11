import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./componentes/itemDetailContainer/itemDetailContainer.jsx";
import "./App.css";
import { ItemListContainer } from "./componentes/itemListContainer/itemListContainer.jsx";
import { Card } from "./extras/card.jsx";
import { Footer } from "./componentes/Footer/Footer.jsx";
import { CartProvider } from "./context/CartContext/CartProvider.jsx";
import { MainLayout } from "./Layouts/MainLayout.jsx";
import { AdminLayout } from "./Layouts/Adminlayout.jsx";
import { RutaProtegida } from "./componentes/rutaProtegida/RutaProtegida.jsx";
import { Login } from "./componentes/login/Login.jsx";
import { Cart } from "./componentes/Cart/Cart.jsx";
import { ProductFormContainer } from "./componentes/AdminComponents/ProductFormContainer/productFormContainer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<MainLayout />}>
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
              <Route path="/carrito" element={<Cart/>} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route
                path="alta-productos"
                element={
                  <RutaProtegida>
                      <ProductFormContainer/>
                  </RutaProtegida>
                }
              />
            </Route>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
