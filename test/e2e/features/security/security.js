'use strict';

describe('Security feature', function () {

    beforeEach(function () {
        browser.get('/#/security');
    });

    it('should show security title', function () {
        expect(element.all(by.css('.security-title')).first().getText()).toMatch('Security');
    });

});
