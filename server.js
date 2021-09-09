const express = require("express"); 
const app = express();
 
const cors = require("cors");
app.use(cors());
const weather= require('./controller/weather.controller');
const {movie,getIndex}= require('./controller/Movies.controller');
require("dotenv").config();

app.get("/",getIndex );

app.get("/weather",weather);
 
  app.get("/movies", movie);

app.listen(process.env.PORT);





