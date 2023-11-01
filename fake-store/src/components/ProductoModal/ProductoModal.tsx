import { ModalType } from "../../types/ModalType";
import Producto from "../../types/Producto";
import { Button, Form, Modal } from "react-bootstrap";
import * as Yup from "yup";
import {useFormik} from "formik";
import { ProductoService } from "../../services/ProductoService";
import { toast } from 'react-toastify';

export default function ProductoModal(props : {
    show: boolean;
    onHide: () => void;
    title: string;
    modalType: ModalType;
    producto: Producto
}) {

    //Yup
    const validationSchema = () => {
        return Yup.object().shape({
            id: Yup.number().integer().min(0),
            title: Yup.string().required('El titulo es requerido'),
            price: Yup.number().min(0).required('El precio es requerido'),
            description: Yup.string().required('La descripcion es requerida'),
            category: Yup.string().required('La categoria es requerida'),
            image: Yup.string().required('La URL de la imagen es requerida'),
        });
    };

    //Formik
    const formik = useFormik({
        initialValues: props.producto,
        validationSchema: validationSchema(),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (obj: Producto) => handleSaveUpdate(obj),
    });

    //CREATE - UPDATE
    const handleSaveUpdate = async (pro: Producto) => {
        try {
            const isNew = pro.id === 0;
            if (isNew) {
                await ProductoService.createProducto(pro);
            } else {
                await ProductoService.updateProducto(pro.id, pro);
            }
            toast.success(isNew ? "Producto Creado" : "Producto Actualizado", {
                position: "top-center",
            });

            props.onHide();
        } catch (error) {
            console.error(error);
            toast.error('Ha ocurrido un Error', {position: "top-center"});
        }
    };

    const handleDelete = async () => {
        try {
            await ProductoService.deleteProducto(props.producto.id);
            toast.success("Producto Borrado", {
                position: "top-center",
            });

            props.onHide();
        } catch (error) {
            console.error(error);
            toast.error('Ha ocurrido un Error', {position: "top-center"});
        }
    }


    return(
        <>
        {props.modalType === ModalType.DELETE ? (
            <>
                <Modal show={props.show} onHide={props.onHide} centered backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>¿Está seguro que desea eliminar el Producto?<br/> <strong>{props.producto.title}</strong></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onHide}>
                        Cancelar
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>
                        Borrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        ) : (
            <>
            <Modal show={props.show} onHide={props.onHide} centered backdrop="static" className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group controlId="formTitulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                value={formik.values.title || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.title && formik.touched.title)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formPrecio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                name="price"
                                type="number"
                                value={formik.values.price || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.price && formik.touched.price)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.price}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formDescripcion">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                name="description"
                                type="text"
                                as="textarea"
                                rows={4}
                                value={formik.values.description || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.description && formik.touched.description)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.description}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formCategoria">
                            <Form.Label>Categoría</Form.Label>
                            <Form.Control
                                name="category"
                                type="text"
                                value={formik.values.category || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.category && formik.touched.category)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.category}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formImagen">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                name="image"
                                type="text"
                                value={formik.values.image || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={Boolean(formik.errors.image && formik.touched.image)}/>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.image}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Modal.Footer className="mt-4">
                            <Button variant="secondary" onClick={props.onHide}>
                                Cancelar
                            </Button>
                            <Button variant="primary" type="submit" disabled={!formik.isValid}>
                                Guardar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
            </>
        )}
        </>
    )

}