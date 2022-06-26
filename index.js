const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

// Heroku inject PORT env variable
const PORT = process.env.PORT || 5000;

app.listen(PORT);
