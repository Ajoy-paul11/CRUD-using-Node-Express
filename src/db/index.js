import mongoose from "mongoose"

const DB_NAME = "Fruits"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        // console.log(connectionInstance);
        console.log(`\n MongoDB Connected, DB HOST:  ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error: ", error)
    }
}


export default connectDB;