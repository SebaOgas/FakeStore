import Producto from "../../types/Producto";
import  "./Tarjeta.css"

export default function Tarjeta(props : {
    producto: Producto
}) {

    function addToCart(id: number) {
        console.log("Producto " + id + " añadido al carrito");
    }

    return (
        <div className="card text-center tarjeta">
            <img src={props.producto.image} className="card-img-top"/>
            <div className="card-body d-flex justify-content-between flex-column">
                <h5 className="card-title">{props.producto.title}</h5>
                <em className="card-text">{props.producto.category}</em>
                <p className="card-text">
                    {props.producto.description}
                </p>
                <em className="card-text">$ {props.producto.price}</em><br></br>
                <button className="btn btn-primary" onClick={() => {addToCart(props.producto.id)}}>Agregar al Carrito</button>
            </div>
        </div>
    );
}