const express = require('express');

const app = express();

app.use(express()); //middleware


app.get('/',(req,res)=>{
  res.status(200).send('Hello from the RPS SERVER!');
});


const port=3000;
app.listen(port,()=>{
  console.log(`The port ${port} is listening for a request...`);
})