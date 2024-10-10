import { Router } from "express";
import { addFruits, getFruits, updateFruits, deleteFruits } from "../controllers/fruit.controller.js";


const router = Router()

router.route("/add").post(addFruits)
router.route("/get").get(getFruits)
router.route("/f/:fruitId").patch(updateFruits)
router.route("/:fruitId").delete(deleteFruits)


export default router