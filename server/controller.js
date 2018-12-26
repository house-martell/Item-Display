const { Product, Color, Photo } = require('../database/model');

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

// const getCurrentPhoto = (req, res) => {
//   let { colorId, photoId } = req.params;
//   Photo.findOne({ where: { colorId: colorId, id: photoId } })
//     .then(photo => res.status(200).send(photo))
//     .catch(err => console.error('cannot find current photo', err));
// };

module.exports = {
  getProduct,
  getColors,
  getCurrentColor,
  getPhotos
};