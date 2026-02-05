const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.info("database connected successfully")
    })
}

module.exports = connectToDb