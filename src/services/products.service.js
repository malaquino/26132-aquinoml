import { readDocuments, createDocument, deleteDocument, updateDocument, readDocument } from "../models/products.models.js";

export const getProductsService = async () => {
    return await readDocuments("productos");
};

export const createProductService = async (producto) => {
    return await createDocument("productos", producto)
}

export const deleteProductService = async (id) => {
    console.log("Capa de servicios")
    return await deleteDocument("productos", id)
}

export const updateProductService = async (id, data) => {
    return await updateDocument("productos", id, data)
}

export const getProductByIdService = async (id) => {
    return await readDocument("productos", id);
};