import StudentModel from "../models/Student.js"
class Student{
    static getAllStudent = async (req,res)=>{
        try {
            const data = await StudentModel.find()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    }
    static getStudentById = async (req,res)=>{
        try {
            const {id} = req.params
            const data = await StudentModel.findById(id)
            res.send(data)
        } catch (error) {
            console.log(error)
            
        }
    }
    static createStudent = async (req,res)=>{
       try {
            const {name,age,fees} = req.body
            const doc = new StudentModel({
                name:name,
                age:age,
                fees:fees
            })
            const result = await doc.save()
            res.status(201).send(result)
       } catch (error) {
            console.log(error)
       }
    }

    static updateStudentById = async (req,res)=>{
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static deleteStudentById = async (req,res)=>{
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)
        } catch (error) {
            console.log(error)
            
        }
    }

}

export default Student