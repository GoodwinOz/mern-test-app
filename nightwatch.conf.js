module.exports = {
    "src_folders" : ["test"],
    "page_objects_path" : ["test/helpers"],

    "webdriver" : {
        "start_process": true,
        "server_path": "node_modules/.bin/chromedriver",
        "port": 9515
    },

    "test_settings" : {
        "default" : {
            'screenshot': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": { //Run tests without chrome UI
                    // "args": ["--headless"]
                }
            }
        }
    }
}
  