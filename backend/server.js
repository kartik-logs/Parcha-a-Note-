/**
 * - This file will run the server
 * - This file will start the database connection
 */


require("dotenv").config()
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();
app.listen(process.env.PORT,()=>{
    console.info("The server is running at a local PORT SUCCESSFULLY")
});

