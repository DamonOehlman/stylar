var expect = require('chai').expect,
    testTarget = document.getElementById('mocha');

describe('setter tests', function() {
    it('can update multiple elements with a single set call', function() {
        var element = stylar(testTarget);
        
        element.set({
            background: 'yellow',
            width: '200px'
        });

        expect(stylar(testTarget, 'background-color')).to.equal('rgb(255, 255, 0)');
        expect(stylar(testTarget, 'width')).to.equal('200px');
    });
    
    it('can reset the width to auto', function() {
        stylar(testTarget, 'width', 'auto');
    });
});