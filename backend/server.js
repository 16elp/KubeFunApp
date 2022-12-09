
const express = require('express');
const cors    = require('cors');
const PORT    = process.env['PORT'] || 2050
const app     = express();

app.use(cors());

app.get('/api/status', (req,res)=>{
  res.sendStatus(200);
})

app.get('/api/hello', (req,res)=>{
  res.send("HELLOOOOO ITS ME");
})

app.get('/api/goodbye', (req,res)=>{
  res.send("u fell for it");
})

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})
