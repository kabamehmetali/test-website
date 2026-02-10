const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const page = (file) => path.join(__dirname, 'views', file);

app.get('/', (_req, res) => res.sendFile(page('index.html')));
app.get('/menu', (_req, res) => res.sendFile(page('menu.html')));
app.get('/about', (_req, res) => res.sendFile(page('about.html')));
app.get('/contact', (_req, res) => res.sendFile(page('contact.html')));

app.use((_req, res) => {
  res.status(404).sendFile(page('404.html'));
});

app.listen(PORT, () => {
  console.log(`Restaurant site running at http://localhost:${PORT}`);
});
