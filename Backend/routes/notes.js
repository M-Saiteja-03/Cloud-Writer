const express = require('express');
const router =express.Router();
const Notes = require('../models/Notes')
var fetchuser=require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//ROUTE:1 endpoint to read all the notes of a user- login required

router.get('/getallnotes',fetchuser, async (req,res)=>{
    try {
        const usernotes = await Notes.find({user:req.user.id});
        res.json(usernotes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

//ROUTE:2 endpoint to create notes of a user- login required

router.post('/addnotes',fetchuser,[
    body('title','enter a valid title').isLength({min:1}),
    body('description','must be atleast 5 char').isLength({min:3})
], async (req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {title,description,tag} = req.body;

        const note=new Notes({
            title,
            description,
            tag,
            user:req.user.id
        });
        const savednote= await note.save();
        res.json(savednote); 

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

// ROUTE:3 Update an existing note - login required
router.put('/updatenote/:id', fetchuser, [
    body('title', 'Enter a valid title').optional().isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').optional().isLength({ min: 5 }),
    body('tag', 'Enter a valid tag').optional().isLength({ min: 1 })
], async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract the note ID from the URL and data from the request body
        const { title, description, tag } = req.body;
        const { id } = req.params;

        // Find the note by ID
        let note = await Notes.findById(id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        // Check if the user owns the note
        if (note.user.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not authorized" });
        }

        // Update the note
        note = await Notes.findByIdAndUpdate(id, { $set: { title, description, tag } }, { new: true });

        // Send the updated note as the response
        res.json(note);
    } catch (error) {
        console.error('Error updating note:', error.message);
        if (!res.headersSent) {
            res.status(500).send("Internal server error");
        }
    }
});

// ROUTE:4 Delete an existing note - login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Extract the note ID from the URL
        const { id } = req.params;

        // Find the note by ID
        let note = await Notes.findById(id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        // Check if the user owns the note
        if (note.user.toString() !== req.user.id) {
            return res.status(403).json({ error: "Not authorized" });
        }

        // Delete the note
        note = await Notes.findByIdAndDelete(id);

        // Send the updated note as the response
        res.json({"Success":"Note has been deleted",note});
    } catch (error) {
        console.error('Error deleting note:', error.message);
        if (!res.headersSent) {
            res.status(500).send("Internal server error");
        }
    }
});

module.exports = router;
