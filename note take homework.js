const express= require("express");
const app= express();
const path= require("path");
const fs= require ("fs");
const PORT= 3301;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const notes = [];
app.get ("/",(req,res )=>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
    


})

app.get ("/notes",(req,res )=>{

res.sendFile(path.join(__dirname,"/public/notes.html"));
    
})


app.get ("/api/notes",(req,res )=>{
    res.json (notes)
})


app.post ("/api/notes",(req,res )=>{
    const newNote = {
        title: "Note 1",
        content: "New notes",
    } 
    notes.push (newNote)
    res.send ("Success")
})


app.delete ("/api/notes/:id",(req,res )=>{
    
})




app.listen (PORT, () => console.log ("Server is now listening on 3301"));