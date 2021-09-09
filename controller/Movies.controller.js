'use strict';
const axios = require('axios');

require("dotenv").config();

const getIndex = (request, response) => {
    response.send('Hello World 👋')
  }

const Movies= require('../models/movie.module')
  const movie =async(req,res)=>{
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
    
  }
  module.exports ={movie,getIndex};