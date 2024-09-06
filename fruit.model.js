import mongoose, { Schema } from "mongoose";


const fruitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    stocks: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })


export const Fruit = mongoose.model("Fruit", fruitSchema) 