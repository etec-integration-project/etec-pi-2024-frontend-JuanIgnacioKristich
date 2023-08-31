import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/header';
import Body from './componentes/body/body';
import Footer from "./componentes/footer/footer"
import Cat_Celulares from './componentes/celulares/cat_cel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      
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
            path="/cat_cel"
            element={
              <>
                <Header />
                <Cat_Celulares />
                <Footer/>
              </>
          }>
          </Route>

          <Route
            path="/cat-gadget"
            element={
              <>
              <Header />
              <Cat_Gadget />
              <Footer/>
              </>
            }
          >
            

          </Route>


        </Routes>
      
      </BrowserRouter>


    </div>

  );
}

export default App;
