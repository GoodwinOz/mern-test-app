module.exports = {
    //Endpoints
    loginUrl: '/api/auth/login',
    linksUrl: '/api/link',
    registerUrl: '/api/auth/register',
    createLinkUrl: '/api/link/generate',

    //Login and registration credentials
    loginUserEmail: 'v1@gmail.com',
    loginUserPassword: 'qweqwe123',
    registerUserEmail: 'v2@gmail.com',
    registerUserPassword: 'qweqwe123',

    //Links credentials
    linkOwnerId: '60ae1fb368871f93edece8ff',
    linkReference: 'https://jestjs.io/',

    //e2e
    newUserEmail: 'e2e@gmail.com',
    newUserPassword: 'qweqwe123',
    redirectLink: 'https://nightwatchjs.org/',
    shortLink: 'http://localhost:5000/t/B4SJAF8cL',
    inputLink: 'input[id = "link"]',
    originalLinkColumn: '#root > div > div > table > tbody > tr > td:nth-child(2)',
    shortLinkColumn: '#root > div > div > table > tbody > tr > td:nth-child(3)',
    yourLinkLine: '#root > div > div > div > p:nth-child(2) > a',
    fromWhereLine: '#root > div > div > div > p:nth-child(3) > a',
    
}