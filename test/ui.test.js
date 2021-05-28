const helpers = require('./helpers/integrationHelpers')

module.exports = {
    before: function (browser) {
        browser.globals.waitForConditionsTimeout = 15000
    },

    '@tags': ['Shortener'],
    'e2e tests for URL Shortener app': function (browser) {
        const page = browser.page.uiHelpers()

        //Navigate to main page -> send credentials to login form
        page
            .navigate()
            .setEmail(helpers.newUserEmail)
            .setPassword(helpers.newUserPassword)
            // .register() //Already registered
            .signIn()

        browser
            .assert.urlContains('create')
            .maximizeWindow()

        //Creating link
        // page //Link was created (uncomment to check functionality)
        //     .enterLink(helpers.redirectLink)
        //     .sendKeys('#link', browser.Keys.ENTER)

        //Switch to page where links listed
        page
            .switchToLinksList()

        browser
            .assert.urlContains('links')
            .expect.element(helpers.originalLinkColumn).text.to.contain(helpers.redirectLink)
        browser
            .expect.element(helpers.shortLinkColumn).text.to.contain(helpers.shortLink)

        page
            .clickOpenBtn()
        
        browser.expect.element(helpers.yourLinkLine).text.to.contain(helpers.shortLink)
        browser.expect.element(helpers.fromWhereLine).text.to.contain(helpers.redirectLink)

        //Click on short version of URL
        page
            .openShortLink()
            
        //Switching (handling) on opened window
        browser
            .windowHandles(function(result) {
                let handle = result.value[1]
                browser.switchWindow(handle)
            })

        //Validation if new window URL is correct
            .assert.urlContains(helpers.redirectLink)

        browser.saveScreenshot('tests_output/reactApp.png')
    },
    after: function (browser) {
        browser.end()
    }
}
