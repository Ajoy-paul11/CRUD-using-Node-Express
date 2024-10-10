import mongoose, { Schema } from "mongoose";


const vegetableSchema = new Schema({
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

})


export const Vegetable = mongoose.model("Vegetable", vegetableSchema)