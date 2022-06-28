const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

// Heroku inject PORT env variable
const PORT = process.env.PORT || 5000;

app.listen(PORT);
