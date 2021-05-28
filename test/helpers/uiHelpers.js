module.exports = {
    url: 'http://localhost:3000',
    elements: {
        mainForm: '#root > div',
        inputEmail: 'input[name = "email"]',
        inputPassword: 'input[name = "password"]',
        inputLink: 'input[id = "link"]',
        registerButton: '#root > div > div > div > div > div.card-action > button.btn.grey.lighten-1.black-text',
        signInButton: '#root > div > div > div > div > div.card-action > button.btn.yellow.darken-4',
        header: '#root > nav',
        linksHeaderBtn: '#nav-mobile > li:nth-child(2) > a',
        originalLinkColumn: '#root > div > div > table > tbody > tr > td:nth-child(2)',
        shortLinkColumn: '#root > div > div > table > tbody > tr > td:nth-child(3)',
        openBtn: '#root > div > div > table > tbody > tr > td:nth-child(4) > a',
        shortLink: '#root > div > div > div > p:nth-child(2) > a',
    },
    commands: [{
        setEmail(value) {
            return this
                .waitForElementPresent('@mainForm')
                .setValue('@inputEmail', value)
        },
        setPassword(value) {
            return this
                .setValue('@inputPassword', value)
        },
        register() {
            return this
                .click('@registerButton')
        },
        signIn() {
            return this
                .click('@signInButton')
        },
        enterLink(value) {
            return this
                .waitForElementPresent('@inputLink')
                .setValue('@inputLink', value)
        },
        switchToLinksList() {
            return this
                .waitForElementPresent('@linksHeaderBtn')
                .click('@linksHeaderBtn')
        },
        clickOpenBtn() {
            return this
                .click('@openBtn')
        },
        openShortLink() {
            return this
                .click('@shortLink')
        }
    }]
}