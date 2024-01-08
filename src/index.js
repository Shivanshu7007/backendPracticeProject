import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen("Database Connected", process.env.PORT || 8000, () => {
        console.log(`Server is Running${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Error connecting to the database",error)
})