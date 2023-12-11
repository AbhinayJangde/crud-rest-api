import express from "express"
import Student from "../controllers/student.controller.js"
const router = express.Router()

router.get("/",Student.getAllStudent)
router.get("/:id",Student.getStudentById)
router.post("/",Student.createStudent)
router.put("/:id",Student.updateStudentById)
router.delete("/:id",Student.deleteStudentById)


export default router
