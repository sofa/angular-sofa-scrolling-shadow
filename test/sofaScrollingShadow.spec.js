'use strict';

describe('sofa.scrollingShadow', function () {

    var element, $compile, $rootScope;

    beforeEach(module('sofa.scrollingShadow'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));


    it('should append the html', function (done) {
        element = $compile('<div><div sofa-scrolling-shadow></div></div>')($rootScope);
        $rootScope.$digest();
        expect(element.find('div').length).toEqual(3);
        var top = angular.element(element.find('div')[1]),
            bottom = angular.element(element.find('div')[2]);
        
        setTimeout(function() {
            expect(top.css('top')).toEqual('0px');
            expect(bottom.css('bottom')).toEqual('0px');
            done();
        }, 3);
    });
});
