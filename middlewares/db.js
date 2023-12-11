import mongoose from "mongoose"
export default async (DB_URL)=>{
    const DB_OPTIONS = {
        dbName:"school"
    }
    try {
        await mongoose.connect(DB_URL,DB_OPTIONS)
        console.log("db connection successful")
    } catch (error) {
        console.log(error)
    }

}