const express = require('express');

app = express();
app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo app v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send(
    [
      {name: 'Menghua', age: 38},
      {name: 'Charlie', age: 11},
      {name: 'Henry', age: 6}
    ]
  );
});

app.listen(3000);
module.exports.app = app;
