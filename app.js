const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); //middleware
app.use(cors()); //middleware

let score = JSON.parse(fs.readFileSync('./backend/score.json','utf-8'));

app.get('/index.html',(req,res)=>{
  res.status(200).json(score);
});
app.post('/index.html',(req,res)=>{
  const clientScore = req.body;
  fs.writeFile('./backend/score.json',JSON.stringify(clientScore),(err)=>{
    res.status(200).json(clientScore);
  });
  
});


const port=3000;
app.listen(port,()=>{
  console.log(`The port ${port} is listening for a request...`);
})