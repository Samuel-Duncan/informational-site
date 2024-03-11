/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // eslint-disable-next-line no-confusing-arrow
  const urlPaths = (url) =>
    url === '/'
      ? 'index.html'
      : url === '/about'
      ? 'about.html'
      : url === '/contact'
      ? 'contact.html'
      : '404.html';

  const filePath = path.join(__dirname, 'public', urlPaths(req.url));

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content, 'utf8');
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
