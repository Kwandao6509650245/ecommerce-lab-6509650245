const request = require('supertest');
const app = require('../app');
describe('Product API Tests', () => {
    describe('GET /products', () => {
        it('should return all products', async () => {
            const res = await request(app).get('/products');
            expect(res.status).toBe(200)
            expect(res.body).toHaveLength(2)
            expect(res.body).toEqual([
                { id: 1, name: 'Laptop', price: 1000, stock: 5 },
                { id: 2, name: 'Smartphone', price: 600, stock: 10 }
            ])
        });
    });
    describe('GET /products/:id', () => {
        it('should return a product by ID', async () => {
            const res = await request(app).get('/products/1');
            expect(res.status).toBe(200)
            expect(res.body).toEqual({ id: 1, name: 'Laptop', price: 1000, stock: 5 })
        });
        it('should return 404 if product not found', async () => {
            const res = await request(app).get('/products/3');
            expect(res.status).toBe(404)
            expect(res.body).toEqual({ message: 'Product not found' })
        });
    });
    describe('POST /products', () => {
        it('should add a new product', async () => {
            const newProduct = {
                name: 'Keyboard',
                price: 300,
                stock: 20
            };

            const res = await request(app)
                .post(`/products`)
                .send(newProduct);

            expect(res.status).toBe(201)
        });
    });
});