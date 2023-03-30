import express from "express";
import { verifyToken, verifyTokenAndAuthorization } from "../controllers/middlewareController.js";

import { putUser, deleteUser, getUser, getAllUser } from "../controllers/user.controller.js";
const router = express.Router();

//UPDATE
router.put("/:id",verifyTokenAndAuthorization, putUser);

//DELETE
router.delete("/:id", deleteUser);

//GET USER
router.get("/find/:id", getUser);

//GET ALL USER
router.get("/",verifyToken, getAllUser);

export default router;