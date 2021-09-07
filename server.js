const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 3000;
// a server endpoint
const data = require("./data/startercode.json");
app.get(
  "/weather", // our endpoint name
  function (req, res) {
    // callback function of what we should do with our request
    const searchQuery = req.query.city_name;
    const lat = req.query.lat;
    const lon = req.query.lon;
    // res.send("hi 🆒");
    // res.send(searchQuery);
    // console.log(searchQuery);
    res.json(lat[0]);
  }
);
app.get(
  "/", // our endpoint name
  function (req, res) {
    // callback function of what we should do with our request
    res.send("Hello World 😃");

    // our endpoint function response
  }
);
app.listen(3000, () => {
  console.log(`Server started on port`);
}); // kick start the express server to work
