
function DefineP(keys) {

    var testObject = new TestObject();

    keys.forEach(p => {

        const method = testObject[p];
        Object.defineProperty(testObject, p, {
            value() {
                const startTime = Date.now();
                const result =  Reflect.apply(method, testObject, arguments)
                const endTime = Date.now();
                console.log("cost:", p, startTime, endTime, endTime - startTime);
                return result;
            }
        })

    })


    return testObject;
}