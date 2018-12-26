const Sequelize = require('sequelize');

require('dotenv').config();

const connection = new Sequelize(
  'lulumelon',
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

connection.authenticate()
  .then(() => console.log('connected to mysql'))
  .catch(err => console.error('connection error', err));

module.exports = connection;