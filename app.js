const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Load teams data
const teams = JSON.parse(fs.readFileSync('./data/teams.json', 'utf-8'));

// Route to render HTML
app.get('/', (req, res) => {
  res.render('index', { teams });
});

app.listen(PORT, () => {
  console.log(`NBA App running at http://localhost:${PORT}`);
});

