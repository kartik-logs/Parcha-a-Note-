require("dotenv").config()
const app =  require("app");
const connectToDb = require("./src/config/database")

connectToDb()
app.listen(process.env.PORT, ()=>{
    console.log("server is connected")
})
