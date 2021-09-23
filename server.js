const express= require("express");
const app= express();
const path= require("path");
const fs= require ("fs");
const PORT= 3301;
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get ("/",(req,res )=>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
    


});

app.get ("/notes",(req,res )=>{

res.sendFile(path.join(__dirname,"/public/notes.html"));
    
});


app.get ("/api/notes",(req,res )=>{
    res.json (getData());
});


app.post ("/api/notes",(req,res )=>{
    const data = getData();
    const newNote = req.body;
    newNote.id = Date.now ();
    data.push (newNote);
    saveData (data);
    res.send ("Success");
});


app.delete ("/api/notes/:id",(req,res )=>{
    const data = getData();
    const newData = data.filter (note => note.id != req.params.id);
    saveData (newData);
    res.send ("Success");

    
});




app.listen (PORT, () => console.log ("Server is now listening on 3301"));

function getData () {
    const data = fs.readFileSync("./db/db.json");
    return JSON.parse (data);

}
function saveData (data){
    fs.writeFileSync ("./db/db.json",JSON.stringify(data));
}