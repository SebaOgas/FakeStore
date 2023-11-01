import { useEffect, useState } from "react";
import Producto from "../types/Producto";
import { ProductoService } from "../services/ProductoService";
import Loader from "../components/Loader/Loader";
import ProductoEditor from "../components/ProductoEditor/ProductoEditor";
import { ModalType } from "../types/ModalType";
import ProductoModal from "../components/ProductoModal/ProductoModal";

export default function Administracion () {
    const [productos, setProductos] = useState<Producto[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const productos =await ProductoService.getProductos();
            setProductos(productos);
            setIsLoading(false);
        })();
    }, []);

    function initProducto() : Producto {
        return {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: ""
        };
    }

    const [producto, setProducto] = useState<Producto>(initProducto);
            
    //Manejo de Modal
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState("");

    function mostrarModal(title: string, producto: Producto, tipo: ModalType) : void {
        setTitle(title);
        setModalType(tipo);
        setProducto(producto);
        setShowModal(true);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="text-end text-md-start">
                    <button className="btn btn-success my-2" onClick={() => {mostrarModal("Nuevo Producto", initProducto(), ModalType.CREATE);}}>Nuevo Producto</button>
                </div>
                {
                    isLoading ? (<Loader/>) : (
                        productos.map(producto => (<ProductoEditor key={producto.id} producto={producto} update={mostrarModal}/>))
                    )
                }
            </div>
            {showModal && (
                <ProductoModal                 
                show={showModal}
                onHide={() => setShowModal(false)}
                title={title}
                modalType={modalType}
                producto={producto}
                />
            )}

        </>
    )
}