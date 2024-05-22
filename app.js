const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json()); //middleware
app.use(cors()); //middleware

app.use(express.static(path.join(__dirname, 'public')));

let score = JSON.parse(fs.readFileSync('./backend/score.json','utf-8'));

app.get('/score',(req,res)=>{
  res.status(200).json(score);
});
app.post('/score',(req,res)=>{
  const clientScore = req.body;
  fs.writeFile('./backend/score.json',JSON.stringify(clientScore),(err)=>{
    res.status(200).json(clientScore);
  });
  
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port=3000;
app.listen(port,()=>{
  console.log(`The port ${port} is listening for a request...`);
})