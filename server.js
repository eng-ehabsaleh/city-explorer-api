const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors");
app.use(cors());

require("dotenv").config();
// a server endpoint
const weatherData = require("./data/weather.json");
app.get(
  "/", // our endpoint name
  function (req, res) {
    // callback function of what we should do with our request
    // res.send("Hello World ~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!"); // our endpoint function response
  }
);
class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}
// we made the class to not return the whole content to the user
app.get("/weather", (req, res) => {
  //   res.send("Hello World ~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!%%%%____________--");console.log(req.query)

  const searchQuery = req.query.city_name;
  const lat = req.query.lat;
  const lon = req.query.lon;
  //   res.send(req);

  const matchArr = weatherData.find((ele) => {
    return (
      ele.city_name.toLowerCase() === searchQuery.toLocaleLowerCase() ||
      ele.lat === lat ||
      ele.lon === lon
    );
  });
  console.log(matchArr);
  if (matchArr) {
    const resArr = matchArr.data.map((ele) => {
      return new Forecast(ele.valid_date, ele.weather.description);
    });
    res.json(resArr);
  } else {
    res.json(alert("data not found"));
  }
});
app.listen(process.env.PORT);

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

