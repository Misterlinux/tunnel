const express = require("express");
var app = express();
const port = process.env.PORT || 3000
const bodyParser = require("body-parser");

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
});

 
const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: 3000 });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();


app.get('/', (req, res) => {
    console.log( "ok so, you welcome? ")

    res.send( "is it there?" );
})
  

app.get('/innit', function (req, res) {
    const oll = "kinda, but not really";
    console.log( "ok so, the thing is working")

    req.body = "oppure"

    res.json( req.body );
})

 
app.listen(port, _ => {
    console.log(`server started on port ${port}`)
})