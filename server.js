const express = require("express"); 
const app = express(); 
const cors = require("cors");
app.use(cors());

require("dotenv").config();
// const weatherData = require("./data/weather.json");
app.get(
  "/", 
  function (req, res) {

  }
);
class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}
app.get("/weather",  async (req, res) => {
  const WEATHER_API_KEY=process.env.WEATHER_API_KEY
  const weatherUrl='https://api.weatherbit.io/v2.0/current?',
  // const searchQuery = req.query.city_name;
  const lat = req.query.lat;
  const lon = req.query.lon;

  // 
  // const matchArr = weatherData.find((ele) => {
  //   return (
  //     ele.city_name.toLowerCase() === searchQuery.toLocaleLowerCase() ||
  //     ele.lat === lat ||
  //     ele.lon === lon
  //   );
  // });
  // console.log(matchArr);
  // if (matchArr) {
  //   const resArr = matchArr.data.map((ele) => {
  //     return new Forecast(ele.valid_date, ele.weather.description);
  //   });
  //   res.json(resArr);
  // } else {
  //   res.json(alert("data not found"));
  // }
 try {
   const weatherRes= await axios.get(`${weatherUrl}lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`);
   res.json(new Forecast(weatherRes.data.ob_time,weatherRes.data.weather.description))
 }catch(error){
   res.json(error.data)
 }

});
class Movies{
  constructor(title,overview,image_url){
    this.title=title;
    this.overview=overview;
    this.image_url=image_url;
  }
}
app.get("/movies", async(req,res)=>{
  const city=req.query.city_name
  const MOVIE_API_KEY=process.env.MOVIE_API_KEY;
  const movieUrl='https://api.themoviedb.org /discover/movie?';
  try{
    const movieRes= await axios.get(`${movieUrl}api_key=${MOVIE_API_KEY}certification_country=${city}&certification=R`);
    const frontMovie=movieRes.data.map(ele=>{
      return (new Movies(ele.title,ele.overview,ele.image_url))
    })
    res.json(frontMovie)
  }catch(error){
    res.json(error.data)
  }
  
})

app.listen(process.env.PORT);

// const port = process.env.PORT || 3000;
// const data = require("./data/startercode.json");


// app.listen(3000, () => {
//   console.log(`Server started on port`);
// }); 

