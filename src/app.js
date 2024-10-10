import express from "express"
import cors from "cors"
import { customError } from "./middleware/customError.js"


const app = express()


app.use(express.json())

app.use(cors(
    {
        origin: process.env.ACCESS_ORIGIN,
        credentials: true
    }
))
app.use(express.urlencoded({ extended: true }))


// Import routes
import fruitsRoute from "./routes/fruit.routes.js"
import vegetablesRoute from "./routes/vegetable.routes.js"
import employeesRoute from "./routes/employee.routes.js"



// declare routes
app.use("/api/v1/fruits", fruitsRoute)
app.use("/api/v1/veg", vegetablesRoute)
app.use("/api/v1/employee", employeesRoute)


app.use(customError)


export { app }