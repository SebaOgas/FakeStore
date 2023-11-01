import Producto from "../../types/Producto";
import {PencilFill, TrashFill} from "react-bootstrap-icons";

import "./ProductoEditor.css"
import { ModalType } from "../../types/ModalType";

export default function ProductoEditor(props: {
    producto: Producto,
    update: (title: string, producto: Producto, tipo: ModalType) => void
}) {
    return (
        <div className="row ProductoEditor">
            <div className="col-12 col-md-1 d-flex flex-column justify-content-center align-items-center    ">
                <img src={props.producto.image}/>
            </div>
            <div className="col-12 col-md-2 d-flex flex-column justify-content-center text-center">
                <h5>{props.producto.title}</h5>
            </div>
            <div className="col-12 col-md-2 d-flex flex-column justify-content-center text-center">
                <em>{props.producto.category}</em>
                <em>$ {props.producto.price}</em>
            </div>
            <div className="col-md-6 d-none d-md-flex flex-column justify-content-center">
                <p>{props.producto.description}</p>
            </div>
            <div className="col-12 col-md-1 d-flex flex-row flex-md-column justify-content-center text-center">
                <button className="btn btn-warning me-2 me-md-0 mb-md-2" onClick={() => {props.update("Modificar Producto", props.producto, ModalType.UPDATE);}}><PencilFill color="#FFF"/></button>
                <button className="btn btn-danger" onClick={() => {props.update("Eliminar Producto", props.producto, ModalType.DELETE);}}><TrashFill color="#FFF"/></button>
            </div>

        </div>
    );
}