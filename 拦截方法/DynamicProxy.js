
class DynamicProxy {

    constructor(ClassObj, ...args) {
        this.classObj = new ClassObj(...args);
    }


    inject(keys) {
        // 不能获得class上的方法的降级方法
        keys.forEach(k => {
            if (typeof this.classObj[k] === "function") {
                this[k] = this._createInvoke(k);
            }
        });
    }

    _createInvoke(method) {
        return function () {
            const startTime = Date.now();
            const result = this.classObj[method].apply(this.classObj, arguments);
            const endTime = Date.now();
            console.log(`cost: ${method}`, startTime, endTime, endTime - startTime);
            return result;
        }
    }
}