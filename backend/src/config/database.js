/**
 * - This is used to define the database connection function 
 */

const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.info("The database is connected succcessfully")
    })
}

module.exports = connectToDb