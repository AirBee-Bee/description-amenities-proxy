const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());

app.get('/listing/:id', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

app.get('/public/style.css', (req, res) => {
  res.sendFile('style.css', {root: path.join(__dirname, '../public')});
});

app.get('/listing/:id/photos', (req, res) => {
  res.redirect(`http://localhost:3000/listing/${req.params.id}/photos`);
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

app.get('/listing/:id/rooms', (req, res) => {
  res.redirect(`http://localhost:5000/listing/${req.params.id}/rooms`);
});

app.get('/propertyScores/*', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

app.get('/propertyReviews/*', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

app.get('/userInfo/*', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
