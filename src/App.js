import { AppRouter } from "./routes/AppRouter"
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Login from './Components/Login';
import Inicio from './Components/Inicio/Inicio';
import Servicios from './Components/Servicios';
import Productos from './Components/Productos';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';


function App() {
  return (
    <>
      <AppRouter />
      {/* <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/admin' element={<Login/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
            <Route path='/menu' element={<Productos/>} />
            <Route path='/servicios' element={<Servicios/>} />
            <Route path='/contacto' element={<Contacto/>} />
          </Routes>
        </Layout>
      </BrowserRouter> */}
    </>
  );
}

export default App;

// ESTE COMPONENTE ESTA DIFERENTE LAS RUTAS
