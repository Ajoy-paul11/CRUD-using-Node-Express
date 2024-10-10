import { Fruit } from "../models/fruit.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";


const addFruits = asyncHandler(async (req, res, next) => {
    const { name, price, quantity, stocks } = req.body

    if ([name, price, quantity].some(field => field === "")) {
        let error = new ApiError(404, "All fields are required")
        return next(error)
    }

    const setFruit = await Fruit.create(
        {
            name,
            price,
            quantity,
            stocks
        }
    )

    return res
        .status(201)
        .json(
            new ApiResponse(201, setFruit, "Add fruits successfully")
        )
})


const getFruits = asyncHandler(async (req, res, next) => {

    const fruits = await Fruit.find({})

    return res
        .status(200)
        .json(
            new ApiResponse(200, fruits, "Got results successfully")
        )
})

const updateFruits = asyncHandler(async (req, res, next) => {
    const { fruitId } = req.params

    const { price, quantity, stocks } = req.body

    if (!price || !quantity) {
        let error = new ApiResponse(404, "Fields can't be empty")
        return next(error)
    }

    const updateFruit = await Fruit.findByIdAndUpdate(
        fruitId,
        {
            $set: {
                price,
                quantity,
                stocks
            }
        },
        { new: true }
    )

    return res
        .status(201)
        .json(
            new ApiResponse(201, updateFruit, "Details of the fruit updated")
        )
})

const deleteFruits = asyncHandler(async (req, res, next) => {
    const { fruitId } = req.params

    await Fruit.findByIdAndDelete(fruitId)

    return res
        .status(201)
        .json(
            new ApiResponse(201, {}, "Details deleted successfully")
        )
})


export { addFruits, getFruits, updateFruits, deleteFruits }