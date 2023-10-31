import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Productos from "../pages/Productos";
import Administracion from "../pages/Administracion";


const AppRoutes : React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/administracion" element={<Administracion/>}/>
        </Routes>
    )
}

export default AppRoutes;