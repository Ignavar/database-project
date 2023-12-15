
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 5000;

app.use('/api/auth', require('./routes/auth'));
app.use('/api/employee',require('./routes/employee'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

