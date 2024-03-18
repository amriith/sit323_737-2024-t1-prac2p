const express = require ('express');
const fs = require ('fs');
const path = require ('path');
const app = express();

app.get ("/files", function (req, res){
 
    fs.readdir (path.join(__dirname, "/files"),(err,files)=>{
        if (err){return res.status (500).json ({error: 'failed to retrive files '});}
     res.json(files);
    });
 
})

app.get ("/files/:filename", function (req,res){
    const filePath = path.join(__dirname, './files/', req.params.filename)

    fs.readFile (filePath, 'utf-8', (err, data) =>{
        if (err){
            return res.status(404).send('File Not Found Mate');
        }
        res.send(data);

    });
});

app.listen (3000);