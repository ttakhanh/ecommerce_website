import mongoose from "mongoose";
const { Schema } = mongoose;

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

export const Cart = mongoose.model("Cart", cartSchema);