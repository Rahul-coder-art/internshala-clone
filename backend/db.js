console.log("MONGO_URI value:", process.env.MONGO_URI);
const mongoose=require("mongoose")
require('dotenv').config()
database=process.env.DATABASE_URL
const url=database
module.exports.connect=()=>{
    mongoose.connect(url,console.log("Databse is connected"))
}

