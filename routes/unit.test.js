const request = require('supertest')
const app = 'localhost:3000'

//Auth routes unit tests
describe('Tests for auth routes', () => {
    //Positive case
    it('should response with status 200 using GET request', async () => {
        const response = await request(app)
            .get('/')
        expect(response.status).toBe(200)
    }, 10000)

    it('should test login endpoint', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'v1@gmail.com',
                password: 'qweqwe123'
            })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('token')
    }, 10000)

    //Negative case
    it('should test register endpoint validation', async () => {
        const response = await request(app)
            .post('/api/auth/register')
        expect(response.status).toBe(400)
    }, 10000)

    it('should test register endpoint validation', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({
                email: "v1@gmail.com",
                password: "qweqwe123"
            })
        expect(response.status).toBe(400)
    }, 10000)

    it('should test login endpoint validation', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'gmail',
                password: 'password'
            })
        expect(response.status).toBe(400)
    }, 10000)
})

//Links
describe('Testing links routes', () => {
    it('should return status 401 from "links" endpotin with GET request', async () => {
        const response = await request('localhost:3000')
            .get('/api/link')
            .set('Accept', 'application/json')
        expect(response.status).toBe(401)
    })

    it('should return status 401 from "links" endpotin with GET request', async () => {
        const response = await request('localhost:3000')
            .get('/api/link/60ae38773f8ae4e06692804b')
            .set('Accept', 'application/json')
        expect(response.status).toBe(401)
    })
})