const Sequelize = require('sequelize');
const db = require('../index');


const Campuses = db.define('campus', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  description: Sequelize.TEXT

});


module.exports = Campuses;
