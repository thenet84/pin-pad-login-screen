const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use('/pin-login', express.static(path.join(__dirname, 'pin-login')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/dashboard/', function(req, res) {
  res.sendFile(path.join(__dirname, './dashboard.html'));
});

app.post('/', (req, res) => {
  if(req.body.pincode === '1234')
    res.sendStatus(200);
  res.sendStatus(401);
})

// Start the server
app.listen(config.port, ()=>{
  console.info(`Express listening on port ${config.port}`)
})
  
module.exports = app;