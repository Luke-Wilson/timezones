var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var {City, Language, db} = require('./models.js');

//static routes
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

//request handlers
app.get('/api/city', (req, res) => {
  console.log('GET MESSAGE RECEIVED');
  City.findAll({})
  .then(cities => {
    // console.log(resp);
    res.send(cities);
  });
})

app.post('/api/city', (req, res) => {
  console.log('=== Incoming POST request ===');
  console.log(req.body.city);
  console.log(req.body.timezone);
  console.log(req.body.language);
  var {city, timezone, language} = req.body;
  language = language || 'English';
  Language.findOrCreate({
    where: {name: language}
  })
  .spread((lang, created) => {
    var newCity = City.build({
        name: city,
        timezone: timezone,
        LanguageId: lang.id
      })
    newCity.save();
    res.json(lang.id);
  });
});


var port = 3000;
app.listen(port, _ => {
  console.log('listening on port', port);
});
