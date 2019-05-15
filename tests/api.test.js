const request = require('supertest');
const http = require('http');
const app = require('../server/app');

jest.useFakeTimers();

let connection;

beforeAll(async () => {
  try {
    connection = await http.createServer(app);
  } catch (err) {
    console.error(err);
  }
});

afterAll(async () => {
  try {
    await connection.close();
  } catch (err) {
    console.error(err);
  }
});

describe('GET /api/products/:id', () => {
  test('Should get a product', async (done) => {
    let item = await request(app).get('/api/products/1');
    expect(item.statusCode).toBe(200);
    expect(item.body.name).toBe('Wunder Under High-Rise Tight');
    expect(item.body.category).toBe('Bottoms');
    done();
  });

  test('Should respond with an object of product data', async (done) => {
    let id = Math.floor(Math.random() * 13) + 1;
    let item = await request(app).get(`/api/products/${id}`);
    expect(item.statusCode).toBe(200);
    expect(typeof item.body === 'object').toBe(true);
    expect(item.body).toEqual(expect.objectContaining({
      name: expect.any(String),
      nameline2: expect.any(String),
      category: expect.any(String),
      type: expect.any(String),
      price: expect.any(String),
      description: expect.any(String),
      fabric_name: expect.any(String),
      fabric_description: expect.any(String)
    }));
    done();
  });
});

describe('GET /api/products/:productId/colors/:colorId', () => {
  test('Should get the first color of the product', async (done) => {
    let item = await request(app).get('/api/products/1/colors/1');
    expect(item.statusCode).toBe(200);
    let item2 = await request(app).get('/api/products/2/colors/7');
    expect(item2.statusCode).toBe(200);
    done();
  });

  test('Color should be an object with name and swatch_url keys', async (done) => {
    let item = await request(app).get('/api/products/1/colors/1');
    expect(typeof item.body === 'object').toBe(true);
    expect(item.body.hasOwnProperty('name')).toBe(true);
    expect(item.body.hasOwnProperty('swatch_url')).toBe(true);
    done();
  });

  test('Should get the color name and swatch_url formatted as strings', async (done) => {
    let item = await request(app).get('/api/products/1/colors/1');
    expect(typeof item.body.name === 'string').toBe(true);
    expect(item.body.name).toBe('Misty Merlot');
    expect(typeof item.body.swatch_url === 'string').toBe(true);
    expect(item.body.swatch_url).toBe('https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product1_swatch_color1.jpeg');
    let item2 = await request(app).get('/api/products/2/colors/7');
    expect(typeof item2.body.name === 'string').toBe(true);
    expect(item2.body.name).toBe('Dark Adobe');
    expect(typeof item2.body.swatch_url === 'string').toBe(true);
    expect(item2.body.swatch_url).toBe('https://s3-us-west-1.amazonaws.com/fec-lulumelon/swatches/lulumelon_product2_swatch_color1.jpeg');
    done();
  });
});

describe('GET /api/products/:productId/colors/:colorId/photos', () => {
  test('Photos should be an array', async (done) => {
    let item = await request(app).get('/api/products/1/colors/1/photos');
    expect(Array.isArray(item.body)).toBe(true);
    done();
  });

  test('Photos array should be made up of objects with photo_url key', async (done) => {
    let item = await request(app).get('/api/products/1/colors/1/photos');
    expect(typeof item.body[0] === 'object').toBe(true);
    expect(item.body[0].hasOwnProperty('photo_url')).toBe(true);
    expect(typeof item.body[1] === 'object').toBe(true);
    expect(item.body[1].hasOwnProperty('photo_url')).toBe(true);
    done();
  });
});