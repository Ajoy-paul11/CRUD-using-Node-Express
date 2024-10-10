import { Router } from "express";
import { addEmployee, getAllEmp, getAnEmp, updateEmp, deleteEmp } from "../controllers/employee.controller.js";


const router = Router()


router.route("/add").post(addEmployee)
router.route("/").get(getAllEmp)
router.route("/:id").get(getAnEmp)
router.route("/:id").patch(updateEmp)
router.route("/:id").delete(deleteEmp)


export default router;