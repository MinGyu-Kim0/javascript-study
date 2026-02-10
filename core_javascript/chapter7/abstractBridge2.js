var extendClass2 = (function () {
    var Bridge = function () {};
    return function (SuperClass, subClass, subMethods) {
        Bridge.prototype = SuperClass.prototype;
        subClass.prototype = new Bridge();
        if (subMethods) {
            for (var method in subMethods) {
                subClass.prototype[method] = subMethods[method];
            }
        }
        Object.freeze(subClass.prototype);
        return subClass;
    };
})();
