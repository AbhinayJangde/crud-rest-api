
class Student{
    static getAllStudent = (req,res)=>{
        res.send("get all students")
    }
    static getStudentById = (res,res)=>{
        res.send("get student by id")
    }
    static createStudent = (req,res)=>{
        res.send("create student")
    }

    static updateStudentById = (req,res)=>{
        res.send("update student by id")
    }
    static deleteStudentById = (req,res)=>{
        res.send("delete students by id")
    }

}

export default Student