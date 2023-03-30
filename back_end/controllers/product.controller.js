import { Product } from "../models/product.model.js";

//CREATE
export const createProduct = async (req, res, next) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        // res.status(500).json(error);
        next(error);
    }
};

//GET PRODUCT
export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

//GET ALL PRODUCTS
export const getAllProduct = async (req, res, next) => {
    try {
        const products = await Product.find();
        console.log(products);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}