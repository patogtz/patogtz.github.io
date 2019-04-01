const credentials = require('./credentials');

const request = require('request');
var express = require('express')
const app = express();

// var args = process.argv.slice(2);
// if(!args[0]){
//     console.log("Porfavor introducir la ciudad a consultar como paramentro. Ejemplo: node app.js Monterrey")
//     return
// }
// else {
//     var city = args[0]
//     getCoordinates(city,  (err) => {
//         if (err) {
//           console.log(err);
//           return;
//          }
//         });
// }


function getWeather(latitud, longitud, callback){
    request('https://api.darksky.net/forecast/'+credentials.DARK_SKY_SECRET_KEY + '/'+longitud+','+ latitud +'?lang=es', { json: true }, (err, res, body) => {
        console.log(latitud);
        console.log(longitud)
        if (err){
            callback('Error: Cannot connect to server', undefined);
            return;
          }
          if (res.statusCode === 403) {
            callback("Invalid APIKEY");
            return;
          }
          mens =  `${body.currently.summary} , con una temperatura de ${body.currently.temperature} grados farenheit y con humedad del ${body.currently.humidity}.`              
        
          callback(undefined, mens);
      });
       
       
        //  console.log("Clima actual en "  + ": " + body.currently.summary + ", con una temperatura de " + body.currently.temperature + " grados farenheit y con humedad del " + body.currently.humidity * 100 + "%" );
 
}
function getCoordinates(city, callback){
    request('https://api.mapbox.com/geocoding/v5/mapbox.places/'+ city +'.json?access_token='+credentials.MAPBOX_TOKEN, { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        const latitud = body.features[0].center[0];
        const longitud = body.features[0].center[1];
       getWeather(latitud, longitud, callback);
    })

}
app.get('/weather', function(req, res) {
    if( !req.query.search ) {
        return res.send({
          error: 'Error, no parameter passed.'
        })
    }
    getCoordinates(req.query.search, (err, currentWeather) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.send({ 
            "location": req.query.search,
            "temperature": JSON.stringify(mens)
        })
        
    });

   
});

app.listen(3000, () => {
    console.log("Port 3000!");
})




