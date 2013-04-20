var testTarget = document.body;

describe('setter tests', function() {
    it('can update the background-color with a one shot call', function() {
        stylar(testTarget, 'background-color', '#f8f8f8');
        expect(stylar(testTarget, 'background-color')).to.equal('rgb(248, 248, 248)');
    });
});