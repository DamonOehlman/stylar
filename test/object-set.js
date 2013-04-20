var testTarget = document.body;

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
    
    it('can reset the width to auto, and get non computed values', function() {
        var element = stylar(testTarget);
        
        // update the width to auto
        element.set('width', 'auto');
        
        expect(element.get('width')).to.not.equal('auto');
        expect(element.get('width', true)).to.equal('auto');
    });
});