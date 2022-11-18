
const express = require('express');
const cors    = require('cors');
const PORT    = process.env['PORT'] || 2000
const app     = express();

app.use(cors());

app.get('/home', (req, res)=>{
  res.sendFile('index.html', { root: "../frontend/"});
})

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})
