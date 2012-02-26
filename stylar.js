var stylar = (function() {
    var prefixes = ['ms', 'o', 'Moz', 'webkit', ''],
        knownKeys = {},
        getComputed = null,
        reDash = /^(\w+)\-(\w)/,
        reVendorPrefixes = /^\-\w+\-/;
        
    if (document.defaultView && typeof document.defaultView.getComputedStyle == 'function') {
        getComputed = document.defaultView.getComputedStyle;
    }
        
    function sniffKey(element, attribute) {
        var dashMatch, ii, prefix, prefixedAttr;
        
        // strip off css vendor prefixes
        attribute = attribute.replace(reVendorPrefixes, '');
        
        // convert delimiting dashes into camel case ids
        dashMatch = reDash.exec(attribute);
        while (dashMatch) {
            attribute = dashMatch[1] + dashMatch[2].toUpperCase() + attribute.slice(dashMatch[0].length);
            dashMatch = reDash.exec(attribute);
        }
        
        // search the known prefix
        for (ii = prefixes.length; ii--; ) {
            prefix = prefixes[ii];
            prefixedAttr = prefix ? (prefix + attribute[0].toUpperCase() + attribute.slice(1)) : attribute;
                
            if (typeof element.style[prefixedAttr] != 'undefined') {
                return knownKeys[attribute] = prefixedAttr;
            }
        }
        
        return attribute;
    }
    
    return function(elements, attribute, value) {
        var helpers = { get: getter, set: setter };
        
        if (! Array.isArray(elements)) {
            elements = [elements];
        }
        
        function getter(attr) {
            var readKey = knownKeys[attr] || sniffKey(elements[0], attr),
                style = getComputed ? getComputed.call(document.defaultView, elements[0]) : elements[0].style;
                
            return style[readKey];
        }
        
        function setter(attr, val) {
            var styleKey = knownKeys[attr] || sniffKey(elements[0], attr);

            for (var ii = elements.length; ii--; ) {
                elements[ii].style[styleKey] = val;
            }
            
            return helpers;
        }
        
        // iterate through the elements
        
        // if we are in set mode, then update the attribute with the value
        if (typeof attribute == 'undefined') {
            return helpers;
        }
        else if (typeof value != 'undefined') {
            return setter(attribute, value);
        }
        else {
            return getter(attribute);
        }
    };
})();