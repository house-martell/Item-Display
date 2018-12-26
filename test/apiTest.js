const request = require('supertest');
const app = require('../server/app');

describe('GET /api/products/:id', () => {
  it('gets the first product', done => {
    request(app)
      .get('/api/products/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /api/products/:productId/colors/:colorId', () => {
  it('gets the first color of the product', done => {
    request(app)
      .get('/api/products/1/colors/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
