const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to node-server application." });
});

require("./app/routes/users.routes.js")(app);

require("./app/routes/cities.routes.js")(app);
require("./app/routes/createItinerario.routes.js")(app);
require("./app/routes/sugesteditineraries.routes.js")(app);
//require("./app/routes/users.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000.");
});
