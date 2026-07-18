const express = require('express');

const app = express()
app.use(express.json());

const notes = [];

app.post('/notes',(req,res)=>{
    notes.push(req.body);

    res.status(201).json({
        message:  "note created sucsexfully"
    })
})

app.get('/notes',(req,res)=>{
     res.status(201).json({
        message : "note fatched sucsexfully",
        notes : notes
     })
})

app.delete('/notes/:index',(req,res)=>{

    const idx = req.params.index;
    delete notes[idx];
    res.status(201).json({
        message:"notes deleted sucseccfully"
    })
})

app.patch('/notes/:index',(req,res)=>{
    const idx = req.params.index;
    const description  = req.body.description;
    const title = req.body.title;

    notes[idx].title = title;
    notes[idx].description = description;

    res.status(201).json({
        message : "note updated sucsexfully"
    })
})

module.exports = app;