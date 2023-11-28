import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/header';
import Body from './componentes/body/body';
import Footer from "./componentes/footer/footer"
import Cat_Celulares from './componentes/celulares/cat_cel';
import Cat_Gadget from './componentes/gadgets/cat-gadget';
import Register from "./componentes/register/register"
import Login from "./componentes/login/login"
import DataProvider from './componentes/context/DataContext';
import Productos from './componentes/productos/Productos';
import Cart from './componentes/cart/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowProducts from './componentes/celulares/ShowProducts';





function App() {
  return (
    <div className="App">
      <DataProvider>

        <BrowserRouter>
        
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Body />
                  <Footer/>
                </>
            }>
            </Route>

            <Route
              path="/Cat_cel"
              element={
                <>
                  <Header />
                  <Cat_Celulares />
                  <Footer/>
                </>
            }>
            </Route>

            <Route
              path="/Register"
              element={
                <>
                <Header />
                <Register/>
                <Footer/>
                </>
              }
            >
              

            </Route>

            <Route
              path="/Cat_gadget"
              element={
                <>
                  <Header />
                  <Cat_Gadget />
                  <Footer/>
                </>
            }>
            </Route>

            <Route
              path="/Login"
              element={
                <>
                  <Header />
                  <Login />
                  <Footer/>
                </>
            }>
            </Route>
            
            <Route
              path="/Cart"
              element={
                <>
                  <Header />
                  <Cart />
                  <Footer/>
                </>
            }>
            </Route>

            <Route
              path="/ShowProducts"
              element={
                <>
                  <Header />
                  <ShowProducts />
                  <Footer/>
                </>
            }>
            </Route>

          </Routes>
        
        </BrowserRouter>

      </DataProvider>

    </div>

  );
}

export default App;
