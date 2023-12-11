import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
    name: {type:String,required:true,trim:true},
    age: {type:Number,required:true,trim:true},
    fees: {type:Number,required:true,trim:true, validate:(value)=>{value>=4000}},
},{timestamps:true})

const StudentModel = new mongoose.model('student', StudentSchema)
export default StudentModel