const express = require('express');
const cors = require('cors');
const path = require('path');
const api = require('./server/api');
const app = express();

const port = process.env.PORT || 4000;

// var corsOptions = {
//   origin: 'http://localhost:3000'
// }

// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});