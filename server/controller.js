const { Product, Color, Photo, Fabric, Feature } = require('../database/model');

const getProduct = (req, res) => {
  let { productId } = req.params;
  Product.findOne({ where: { id: productId } })
    .then(product => res.status(200).send(product))
    .catch(err => console.error('cannot find product', err));
};

const getColors = (req, res) => {
  let { productId } = req.params;
  Color.findAll({ where: { productId } })
    .then(colors => res.status(200).send(colors))
    .catch(err => console.error('cannot find colors', err));
};

const getCurrentColor = (req, res) => {
  let { productId, colorId } = req.params;
  Color.findOne({ where: { productId: productId, id: colorId } })
    .then(color => res.status(200).send(color))
    .catch(err => console.error('cannot find current color', err));
};

const getPhotos = (req, res) => {
  let { colorId } = req.params;
  Photo.findAll({ where: { colorId } })
    .then(photos => res.status(200).send(photos))
    .catch(err => console.error('cannot find photos', err));
};

const getFabrics = (req, res) => {
  let { productId } = req.params;
  Fabric.findAll({ where: { productId } })
    .then(fabrics => res.status(200).send(fabrics))
    .catch(err => console.error('cannot find fabrics', err));
};

const getFeatures = (req, res) => {
  let { productId } = req.params;
  Feature.findAll({ where: { productId } })
    .then(features => res.status(200).send(features))
    .catch(err => console.error('cannot find features', err));
};

module.exports = {
  getProduct,
  getColors,
  getCurrentColor,
  getPhotos,
  getFabrics,
  getFeatures
};