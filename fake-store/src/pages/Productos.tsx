import { useEffect, useState } from "react"
import Producto from "../types/Producto";
import { ProductoService } from "../services/ProductoService";
import Tarjeta from "../components/Tarjeta/Tarjeta";
import Loader from "../components/Loader/Loader";

export default function Productos() {
    const [productos, setProductos] = useState<Producto[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const productos =await ProductoService.getProductos();
            setProductos(productos);
            setIsLoading(false);
        })();
    }, []);

    return (
        <div className="container-fluid d-flex flex-row justify-content-space-around align-items-stretch flex-wrap">
            {
                isLoading ? (<Loader/>) : (
                    productos.map(producto => (<Tarjeta key={producto.id} producto={producto}/>))
                )
            }
        </div>
    )
}