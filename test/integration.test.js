const request = require('supertest')
const app = 'localhost:3000'
const helpers = require('./helpers/integrationHelpers')

describe('Integration tests', () => {
    describe.skip('Testing user routes', () => {
        it('should register user', async () => {
            let response = await request(app)
                .post(helpers.registerUrl)
                .send({
                    email: helpers.registerUserEmail,
                    password: helpers.registerUserPassword
                })
            expect(response.status).toBe(201)
            expect(response.body).toContain('User created')
        })
    })

    describe('Testing login and links routes', () => {
        it('should pass login and register tests', async () => {
            //Logging in
            let responseLogin = await request(app)
                .post(helpers.loginUrl)
                .send({
                    email: helpers.loginUserEmail,
                    password: helpers.loginUserPassword
                })

            expect(responseLogin.status).toBe(200)

            //Getting auth. token
            let token = responseLogin.body.token

            //Getting links array
            const response = await request(app)
                .get(helpers.linksUrl)
                .set('Accept', 'application/json')
                .set(
                    'Authorization', 'Bearer ' + token
                )
            expect(response.status).toBe(200)
            expect(response.body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    owner: helpers.linkOwnerId
                })
            ])
            )
        })

        it.skip('should create a new link', async () => {
            //Logging in to get token
            let responseLogin = await request(app)
                .post(helpers.loginUrl)
                .send({
                    email: helpers.loginUserEmail,
                    password: helpers.loginUserPassword
                })

            let token = responseLogin.body.token

            //Creating short link
            const response = await request(app)
                .post(helpers.createLinkUrl)
                .set('Accept', 'application/json')
                .set('Authorization', 'Bearer ' + token)
                .send({ from: helpers.linkReference })
            expect(response.status).toBe(500) //???
        })
    })
})

