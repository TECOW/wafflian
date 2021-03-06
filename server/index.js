// server/index.js
const path = require('path');
const express = require("express");
const products = require('./products.json');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../app/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/products", (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(products));
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
