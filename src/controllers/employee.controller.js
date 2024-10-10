import { Employee } from "../models/employee.model.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const addEmployee = asyncHandler(async (req, res, next) => {
    const { name, email, phone, age, department, salary } = req.body;

    if ([name, email, phone, age, department, salary].some(field => field === "")) {
        return next(new ApiError(404, "All fields are required"))
    }

    const findOne = await Employee.findOne({ email })
    if (findOne) {
        return next(new ApiError(404, "Email already exist"))
    }

    const newEmp = await Employee.create({
        name, email, phone, age, department, salary
    })

    return res.status(201).json(new ApiResponse(201, newEmp, "New Employee added successfully"))
})


const getAllEmp = asyncHandler(async (req, res, next) => {
    const allEmp = await Employee.find({})

    return res.status(200).json(new ApiResponse(200, allEmp, "All employee fetched"))
})


const getAnEmp = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const oneEmp = await Employee.findById(id)
    if (!oneEmp) {
        return next(new ApiError(404, "Employee don't exist"))
    }

    return res.status(200).json(new ApiResponse(200, oneEmp, "An employee data fetched"))
})


const updateEmp = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const { age, department, salary } = req.body

    const findEmp = await Employee.findById(id)
    if (!findEmp) {
        return next(new ApiError(404, "Employee don't exist"))
    }

    const newUpdatedEmp = await Employee.findByIdAndUpdate(
        id,
        { $set: { age, department, salary } },
        { new: true }
    )

    return res.status(201).json(new ApiResponse(201, newUpdatedEmp, "Employee data updated successfully"))

})


const deleteEmp = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const findEmp = await Employee.findById(id)

    if (!findEmp) {
        return next(new ApiError(404, "Employee doesn't exist"))
    }

    await Employee.findByIdAndDelete(id)

    return res.status(201).json(new ApiResponse(201, {}, "Employee deleted successfully"))
})


export { addEmployee, getAllEmp, getAnEmp, updateEmp, deleteEmp }