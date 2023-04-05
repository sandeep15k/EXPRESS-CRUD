const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv= require("dotenv")
const connectDb = require("../EXPRESS-CRUD/config/dbConnection")


dotenv.config()
connectDb();
const app = express()
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));          //this .use is consider as middle ware
app.use(errorHandler)
 
app.listen(port,()=>{
    console.log(`express ${port
    }`);
})