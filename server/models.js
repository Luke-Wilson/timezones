var Sequelize = require('sequelize');
var secrets = require('./config.js');

//connect to existing database
var db = new Sequelize('timezones', secrets.username, secrets.password);

//define a model
var City = db.define('City', {
  name: Sequelize.STRING,
  timezone: Sequelize.INTEGER
});

var Language = db.define('Language', {
  name: Sequelize.STRING
});

City.belongsTo(Language);

db.sync();

module.exports.City = City;
module.exports.Language = Language;
module.exports.db = db;
