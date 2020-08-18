const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

app.get('/listing/:id', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

app.get('/listing/:id/info', (req, res) => {
  res.redirect(`http://localhost:3333/listing/${req.params.id}/info`);
});

app.get('/listing/:id/amenities', (req, res) => {
  res.redirect(`http://localhost:3333/listing/${req.params.id}/amenities`);
});

app.get('/listing/:id/highlights', (req, res) => {
  res.redirect(`http://localhost:3333/listing/${req.params.id}/highlights`);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
