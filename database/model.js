const Sequelize = require('sequelize');

const connection = require('./index');

const Product = connection.define('product', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: Sequelize.STRING, allowNull: false},
  nameline2: {type: Sequelize.STRING, allowNull: true},
  category: {type: Sequelize.STRING, allowNull: false},
  type: {type: Sequelize.STRING, allowNull: false},
  price: {type: Sequelize.STRING, allowNull: false},
  description: {type: Sequelize.TEXT, allowNull: false},
  fabric_name: {type: Sequelize.STRING, allowNull: true},
  fabric_description: {type: Sequelize.STRING, allowNull: true}
},
{
  timestamps: false
});

const Color = connection.define('color', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: Sequelize.STRING, allowNull: false},
  swatch_url: {type: Sequelize.STRING, allowNull: false}
},
{
  timestamps: false
});

const Photo = connection.define('photo', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  photo_url: {type: Sequelize.STRING, allowNull: false}
},
{
  timestamps: false
});

const Fabric = connection.define('fabric', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  fabric_benefit: {type: Sequelize.STRING, allowNull: false}
},
{
  timestamps: false
});

const Feature = connection.define('feature', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  feature_name: {type: Sequelize.STRING, allowNull: false},
  feature_description: {type: Sequelize.STRING, allowNull: false}
},
{
  timestamps: false
});

Color.belongsTo(Product);
Product.hasMany(Color);
Photo.belongsTo(Color);
Color.hasMany(Photo);
Fabric.belongsTo(Product);
Product.hasMany(Fabric);
Feature.belongsTo(Product);
Product.hasMany(Feature);

connection.sync({ force: false })
  .then(() => console.log('synced with database'))
  .catch(err => console.error('error syncing database', err));

module.exports = { Product, Color, Photo, Fabric, Feature };