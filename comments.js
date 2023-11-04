

// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Read the comments from the file
// 4. Return the comments as JSON
// 5. Listen on port 3000

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


