'use strict ';
const axios = require('axios');
const { request } = require('http');
const { Http2ServerRequest } = require('http2');
const Readline = require ('readline') ; // for reading inputs
const rl = Readline.createInterface ({ // for reading inputs
    input : process.stdin ,
    output : process.stdout ,
    terminal : false
})

const matcher = require('./matcher'); 
const weather = require ('./weather')

rl.setPrompt ('> ' ) ;
rl.prompt () ;
rl.on('line', input => {
   matcher (input , cb => {
    if(cb.intent == 'Hello'){
        console.log (cb.entities.greeting) ;
        
    }
    
    else if(cb.intent == 'Current Weather'){
        //without API
        console.log ("Current weather in: "+cb.entities.city);

        weather_now = weather(cb.entities.city).then(result => console.log(result))
    }
    else if(cb.intent == 'get futur weather'){
        //with API | API key:T3n4NKFlp0ZXLogWAyWbOaij4ogMSW1H

        var keys = {"Paris":"623","London":"328328","New York":"349727"};
        // Paris key: 623
        // London key: 328328
        // New York key: 349727
        var key = keys[cb.entities.city];
        // var URL = "http://dataservice.accuweather.com/currentconditions/v1/{"+key+"}&apikey={T3n4NKFlp0ZXLogWAyWbOaij4ogMSW1H}";
        console.log("Température à venir dans les 10 prochains jours "+cb.entities.city+": ");
       
        axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+key+"?apikey=T3n4NKFlp0ZXLogWAyWbOaij4ogMSW1H&language=en").then(result =>  {result.data.DailyForecasts.forEach(element =>{console.log(element.Temperature.Minimum.Value + " F");})
        })
        
        
        
        
    }
    else if(cb.intent == "Exit"){
        process.exit(0);
    }
    
    else{
        console.log ("No idea sorry") ;
        
    }
    rl. prompt () ;

    }) ;
}) ;
    
rl.on('pause', () => {
    console.log('Readline paused.');
});