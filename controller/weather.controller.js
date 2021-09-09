 'use strict';
//  const weatherData = require("../data/weather.json");
 const axios = require('axios');

 require("dotenv").config();

 const Forecast=require('../models/weather.model')
  //// ps-----------------------------------------------------------------------
  //-----------------i kept the commnt because they helped me alot in uderstanding----------------------------

  const weather=  async (req, res) => {
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
  
  }
  module.exports= weather 