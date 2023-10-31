import { Spinner } from "react-bootstrap";
import "./Loader.css"

export default function Loader() {
    return (
        <div className="loader container-fluid d-flex flex-column justify-content-center align-items-center">
            <Spinner animation="border" variant="info"/>
        </div>
    )
}