

const express = require("express");
const app = express();
const noteModel= require("./models/notes.models");



/**
 * This is middleware which is use to read teh data of the request body
 */
app.use(express.json());


/**
 * - GET /api/notes 
 * - /api/notes This will fetch all the notes from the database 
*/

app.get("/api/notes",async(req,res)=>{

    const notes = await noteModel.find()

    res.status(200).json({
        message: " notes fetched successfully",
        notes
    })

});


/**
 * - POST /api/notes
 * - create new note and save data to the database
 * - req.body = {title, description}
 */
app.post("/api/notes", async (req, res)=>{
    const {title, description } = req.body;

    const note = await noteModel.create({
        title,
        description
    });

    res.status(201).json({
        message: "A new note is created",
        note
    })

})


/**
 * - DELETE /api/notes/:id
 * - Delete a note with the id from the req.params
 */

app.delete("/api/notes/:id", async (req,res)=>{

    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "the note is deleted successfully"
    })
})

/**
 * - PATCH /api/notes/:id
 * - update the description of the note by id
 * - req.body = description
 */

app.patch("/api/notes/:id", async (req,res)=>{

    const id = req.params.id

    const {description}= req.body

    await noteModel.findByIdAndUpdate(id,{
        description
    })

    res.status(200).json({
        message: "The description is updated successfully"
    })

})
module.exports = app