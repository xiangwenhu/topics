class ProxyTestObject {

    constructor() {
        this.testObject = new TestObject();
    }

    sum(arr) {
        const startTime = Date.now();
        const result = this.testObject.sum.call(this.testObject, arr);
        const endTime = Date.now();
        console.log("cost:sum", startTime, endTime, endTime - startTime);
        return result;
    }

    unique(key, ...arrs) {
        const startTime = Date.now();
        const result = this.testObject.unique.apply(this.testObject, [key, ...arrs]);
        const endTime = Date.now();
        console.log("cost:unique", startTime, endTime, endTime - startTime);
        return result;
    }


    random(min = 0, max = 1000) {
        const startTime = Date.now();
        const result = this.testObject.random.call(this.testObject, min, max);
        const endTime = Date.now();
        console.log("cost:random", startTime, endTime, endTime - startTime);
        return result;
    }
}
