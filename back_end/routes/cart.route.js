import express from "express";

import { createCart, putCart, findCart } from "../controllers/cart.controller.js";

const router = express.Router();

//REGISTER
router.post("/", createCart);

//UPDATE
router.put("/:id", putCart);

//GET CART
router.get("/find/:userId", findCart);

export default router;