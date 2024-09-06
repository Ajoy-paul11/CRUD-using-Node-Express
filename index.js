import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config(
    { path: './.env' }
)

const app = express()

const PORT = process.env.PORT || 8000

const DB_NAME = "Fruits"

app.use(express.json())
app.use(cors(
    {
        origin: process.env.ACCESS_ORIGIN,
        credentials: true
    }
))
app.use(express.urlencoded({ extended: true }))



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        // console.log(connectionInstance);
        console.log(`\n MongoDB Connected, DB HOST:  ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error: ", error)
    }
}

connectDB()
    .then(
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    )
    .catch((err) => {
        console.log("Connection ERROR: ", err);
    })


import fruitsRouter from "./fruit.routes.js"

app.use("/api/v1/fruits", fruitsRouter)