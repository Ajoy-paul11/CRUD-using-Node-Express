import { Fruit } from "./fruit.model.js";
import { ApiResponse } from "./ApiResponse.js";
import { asyncHandler } from "./asyncHandler.js";


const addFruits = asyncHandler(async (req, res) => {
    const { name, price, quantity, stocks } = req.body

    if ([name, price, quantity].some(field => field === "")) {
        throw new Error
    }

    const setFruit = await Fruit.create(
        {
            name,
            price,
            quantity,
            stocks
        }
    )

    if (!setFruit) {
        throw new Error
    }

    console.log(setFruit);

    return res
        .status(200)
        .json(
            new ApiResponse(200, setFruit, "Add fruits successfully")
        )
})


const getFruits = asyncHandler(async (req, res) => {
    // const fruits = await Fruit.find({})
    // const fruits = await Fruit.find({ _id: "66a622f1822bfb710af06e8e" })
    // const fruits = await Fruit.findById("66a622f1822bfb710af06e8e")
    // const fruits = await Fruit.find({ quantity: "35kg" })
    const fruits = await Fruit.find({}).where("quantity").gte("20kg")
    // const fruits = await Fruit.find({}).where("price").gt(100)

    if (!fruits) {
        throw new Error
    }

    console.log(fruits);

    return res
        .status(200)
        .json(
            new ApiResponse(200, fruits, "Got results successfully")
        )
})

const updateFruits = asyncHandler(async (req, res) => {
    const { fruitId } = req.params

    const { price, quantity, stocks } = req.body

    if (!price || !quantity) {
        throw new Error
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

    if (!updateFruit) {
        throw new Error
    }

    console.log(updateFruit);

    return res
        .status(200)
        .json(
            new ApiResponse(200, updateFruit, "Details of the fruit updated")
        )
})

const deleteFruits = asyncHandler(async (req, res) => {
    const { fruitId } = req.params

    await Fruit.findByIdAndDelete(fruitId)

    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Details deleted successfully")
        )
})


export { addFruits, getFruits, updateFruits, deleteFruits }