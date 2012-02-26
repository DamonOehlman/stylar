var expect = require('chai').expect,
    testTarget = document.getElementById('mocha'),
    checkAttributes = [
        'top', 
        'left',
        'transform',
        'transition',
        'background',
        'background-image',
        '-webkit-transform',
        '-moz-transform'
    ];
    
describe('attribute search test', function() {
    checkAttributes.forEach(function(attribute) {
        it('can successfully retrieve the ' + attribute + ' attribute', function() {
            expect(stylar(testTarget, attribute)).to.exist;
        });
    });
});

describe('attributes test (through the get interface', function() {
    checkAttributes.forEach(function(attribute) {
        it('can successfully retrieve the ' + attribute + ' attribute', function() {
            expect(stylar(testTarget).get(attribute)).to.exist;
        });
    });
});