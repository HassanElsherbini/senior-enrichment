const Sequelize = require('sequelize');
const db = require('../index');

const Students = db.define('student', {
  firstName:{
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    notEmpty: true
  },
  gpa:{
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
    validate: {min: 0, max: 4}
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
    }
  }
});

module.exports = Students;
