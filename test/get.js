var testTarget = document.body,
    checkAttributes = [
        'top', 
        'left',
        'transform',
        'transition-duration',
        'background-color',
        'background-image',
        '-webkit-transform',
        '-moz-transform'
    ];
    
describe('attribute search test', function() {
    checkAttributes.forEach(function(attribute) {
        it('can successfully retrieve the ' + attribute + ' attribute', function() {
            expect(stylar(testTarget, attribute)).to.be.ok();
        });
    });
});

describe('attributes test (through the get interface', function() {
    checkAttributes.forEach(function(attribute) {
        it('can successfully retrieve the ' + attribute + ' attribute', function() {
            expect(stylar(testTarget).get(attribute)).to.be.ok();
        });
    });
});