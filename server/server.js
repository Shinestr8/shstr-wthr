const express = require('express');
const utf8 = require('utf8');
const axios = require("axios").default;

const app = express();

const PORT = process.env.PORT || 5000;


const keys = require('./keys.json');

app.get('/api/weather/current', function(req, res){
    let city = utf8.encode(req.query.city);
    let url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city + '&lang=fr&appid=' + keys.weather
    var options = {
      method: 'GET',
      url: url
    }
    axios.request(options)
      .then(function(response){
        res.json(response.data)
      })
      .catch(function(error){
        console.log(error);
        res.sendStatus(500);
      })
  })
  
  app.get('/api/weather/forecast', function(req, res){
    let city = utf8.encode(req.query.city);
    let url = 'http://api.openweathermap.org/data/2.5/forecast?units=metric&q=' + city + "&lang=fr&appid=" + keys.weather
    var options = {
      method: 'GET',
      url: url
    }
    axios.request(options)
      .then(function(response){
        res.json(response.data)
      })
      .catch(function(error){
        res.sendStatus(500);
      })
  })
  
app.listen(PORT, ()=>{
    console.log("listening on port " + PORT)
})