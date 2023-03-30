import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: Array,
        required: true,
    },
    categories: String,
    size: String,
    price: {
        type: Number,
        required: true,
    }
});

export const Product = mongoose.model("Product", productSchema);