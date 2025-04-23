const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/submit', (req, res) => {
  const { name } = req.body;
  res.send(`<h1>Hello, ${name}!</h1><p>Form submitted successfully.</p>`);
});

// Start server
app.listen(3000, () =>
  console.log('🚀 Server running at: http://localhost:3000')
);
