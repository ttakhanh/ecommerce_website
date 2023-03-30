import express from "express";

import { createProduct, getProduct, getAllProduct } from "../controllers/product.controller.js";

const router = express.Router();

//CREATE PRODUCT
router.post("/", createProduct);

//FIND PRODUCT ID
router.get("/find/:id", getProduct);

//FIND ALL PRODUCT
router.get("/", getAllProduct);

export default router;