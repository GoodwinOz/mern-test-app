const request = require('supertest')
const app = 'localhost:3000'
const helpers = require('./helpers/integrationHelpers')

describe.only('e2e tests', () => {
    it('should create user, login as new user, create new link, test new link', async () => {
        //Creating new user
        // let responseCreateUser = await request(app)
        //     .post(helpers.registerUrl)
        //     .send({
        //         email: helpers.newUserEmail,
        //         password: helpers.newUserPassword
        //     })
        // expect(responseCreateUser.status).toBe(201)
        // expect(response.body).toContain('User created')

        let responseLogin = await request(app)
            .post(helpers.loginUrl)
            .send({
                // email: helpers.newUserEmail,
                // password: helpers.newUserPassword
                email: helpers.loginUserEmail,
                password: helpers.loginUserPassword
            })
        expect(responseLogin.status).toBe(200)
        //Getting auth. token
        let token = responseLogin.body.token
        //Checking the links array
        const responseArrays = await request(app)
            .get(helpers.linksUrl)
            .set('Accept', 'application/json')
            .set(
                'Authorization', 'Bearer ' + token
            )
        expect(responseArrays.status).toBe(200)
        //Creating new short url
        let responseCreateUrl = await request(app)
            .post(helpers.createLinkUrl)
            .set('Accept', 'application/json')
            .set(
                'Authorization', 'Bearer ' + token
            )
            .send({ from: "https://github.com/" })
        expect(responseCreateUrl.status).toBe(201) //Fixed
    })
})