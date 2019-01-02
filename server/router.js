const router = require('express').Router();

const { getProduct,
  getColors,
  getCurrentColor,
  getPhotos,
  getFabrics,
  getFeatures } = require('./controller');

router.route('/products/:productId')
  .get(getProduct);

router.route('/products/:productId/colors')
  .get(getColors);

router.route('/products/:productId/colors/:colorId')
  .get(getCurrentColor);

router.route('/products/:productId/colors/:colorId/photos')
  .get(getPhotos);

router.route('/products/:productId/fabrics')
  .get(getFabrics);

router.route('/products/:productId/features')
  .get(getFeatures);

module.exports = router;