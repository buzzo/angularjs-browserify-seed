'use strict';

describe('System navigation flow control (routes)', function () {

    it('should automatically redirect to "dashboard" when location is empty', function () {
        browser.get('/');
        expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
    });

    it('should automatically redirect to "dashboard" when location does not exist', function () {
        browser.get('/#/notafeature');
        expect(browser.getLocationAbsUrl()).toMatch("/dashboard");
    });

});
