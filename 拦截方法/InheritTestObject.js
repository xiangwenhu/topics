
class InheritTestObject extends TestObject{

    sum(arr) {
        return this._invoke("sum", arguments);
    }

    unique(key, ...arrs) {
        return this._invoke("unique", arguments);
    }


    random(min, max) {
        return this._invoke("random", arguments);
    }


    _invoke(method, args) {
        const startTime = Date.now();
        const result = super[method].apply(this.testObject, args);
        const endTime = Date.now();
        console.log(`cost: ${method}`, startTime, endTime, endTime - startTime);
        return result;
    }

}

