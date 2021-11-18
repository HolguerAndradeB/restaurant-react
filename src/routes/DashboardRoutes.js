import { Routes, Route } from "react-router-dom";
import Layout from '../Components/Layout';
import Inicio from '../Components/Inicio/Inicio';
import Servicios from '../Components/Servicios';
import Productos from '../Components/Productos';
import Nosotros from '../Components/Nosotros';
import Contacto from '../Components/Contacto';



export const DashboardRoutes = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/inicio' element={<Inicio/>} />
                    <Route path='/nosotros' element={<Nosotros/>} />
                    <Route path='/menu' element={<Productos/>} />
                    <Route path='/servicios' element={<Servicios/>} />
                    <Route path='/contacto' element={<Contacto/>} />
                    <Route path='/' element={<Inicio/>} />
                </Routes>
            </Layout>
        </>
    )
}