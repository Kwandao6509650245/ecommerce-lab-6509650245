const request = require('supertest');
const app = require('../app');
describe('Product API Tests', () => {
    describe('GET /products', () => {
        it('should return all products', async () => {
            const res = await request(app).get('/products');
            expect(res.status).toBe(200)
            expect(res.body).toEqual([
                { id: 1, name: 'Laptop', price: 1000, stock: 5 },
                { id: 2, name: 'Smartphone', price: 600, stock: 10 }
            ])
        });
    });

});