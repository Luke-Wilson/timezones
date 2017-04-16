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
  City.findAll({})
  .then(resp => {
    console.log(resp);
    res.send(resp);
  });
})

app.post('/api/city', (req, res) => {
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
