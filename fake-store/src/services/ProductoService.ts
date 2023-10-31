import Producto from "../types/Producto";

const BASE_URL = "https://fakestoreapi.com";

export const ProductoService = {
    getProductos: async () : Promise<Producto[]> => {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        return data;
    }
};