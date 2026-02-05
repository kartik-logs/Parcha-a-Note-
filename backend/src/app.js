import noteModel from "./models/notes.models";

const express = require("express");
const app = express();


//GET api

app.get("api/notes", async (req,res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        Message: "notes fetched successfully",
        data : notes
    });
});

module.exports = app