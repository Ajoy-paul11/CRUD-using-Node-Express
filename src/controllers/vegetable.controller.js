import { Vegetable } from "../models/vegetable.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const addVeg = asyncHandler(async (req, res, next) => {
    const { name, price, quantity } = req.body;
    if (!name || !price || !quantity) {
        return next(new ApiError(404, "Please provide all fields"));
    }

    const getVeg = await Vegetable.findOne({ name })
    if (getVeg) {
        return next(new ApiError(404, "Veg already exists"));
    }
    const newVeg = await Vegetable.create({
        name, price, quantity
    })

    return res.status(201).json(new ApiResponse(201, newVeg, "New Veg added successfully"))
})


const getVeg = asyncHandler(async (req, res, next) => {
    const { id } = req.params

    const findVeg = await Vegetable.findById(id)

    if (!findVeg) {
        return next(new ApiError(404, "Unknown id provided"))
    }

    return res.status(200).json(new ApiResponse(200, findVeg, "Veg data fetched successfully"))
})


const updateVeg = asyncHandler(async (req, res, next) => {
    const { id } = req.params

    const checkVeg = await Vegetable.findById(id)
    if (!checkVeg) {
        return next(new ApiError(404, "Invalid id provided"))
    }

    const { name, price, quantity } = req.body

    if (!name || !price || !quantity) {
        return next(new ApiError(404, "Please provide all fields"));
    }

    const vegUpdate = await Vegetable.findOneAndReplace(
        { _id: id },
        { name, price, quantity },
        { new: true }
    )

    return res.status(201).json(new ApiResponse(201, vegUpdate, "Veg data updated successfully"))
})


export { addVeg, getVeg, updateVeg }