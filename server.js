const app = require("./src/app");

const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect("url of the mongodb").then(()=>{
        console.log("Connected to the database successfully");
    })
}

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})