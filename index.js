const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Heroku!');
});

console.log('About to start listening...');
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});