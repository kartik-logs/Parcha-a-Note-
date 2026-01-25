const express = require("express");

const app = express();




app.get("/",(req,res)=>{
    res.send("Welcome to Parcha-a-Note- Application");
})

module.exports = app
