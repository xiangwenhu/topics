function OProxyTestObject() {

    function _invoke(obj, method, args) {
        const startTime = Date.now();
        const result = Reflect.apply(method, obj, args);
        const endTime = Date.now();
        console.log(`cost: ${method.name}`, startTime, endTime, endTime - startTime);
        return result;
    }

    var testObject = new TestObject();


    var originSum = testObject.sum;
    testObject.sum = function () {
        return _invoke(testObject, originSum, arguments);
    };

    var originRandom = testObject.random;
    testObject.random = function () {
        return _invoke(testObject, originRandom, arguments);
    };

    var originUnique = testObject.unique;
    testObject.unique = function () {
        return _invoke(testObject, originUnique, arguments);
    };


    return testObject;

}


