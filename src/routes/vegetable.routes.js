import { Router } from "express";
import { addVeg, getVeg, updateVeg } from "../controllers/vegetable.controller.js";

const router = Router()


router.route("/add").post(addVeg)
router.route("/:id").get(getVeg)
router.route("/:id").put(updateVeg)


export default router;