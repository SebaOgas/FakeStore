import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";


const AppRoutes : React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chau" element={<>Chau</>}/>
        </Routes>
    )
}

export default AppRoutes;