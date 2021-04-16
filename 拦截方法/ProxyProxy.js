


function ProxyProxyTestObject() {

    var proxy = new Proxy(new TestObject(), {
        get(target, propKey) {
            const method = target[propKey];

            if (typeof method !== "function") {
                return method;
            }

            // 方式一
            return function () {
                const startTime = Date.now();
                const result = method.apply(target, arguments);
                const endTime = Date.now();
                console.log(`cost: ${propKey}`, startTime, endTime, endTime - startTime);
                return result;
            }

            // 方式二
            // return new Proxy(method, {
            //     apply(t, ctx, args){
            //         const startTime = Date.now();
            //         const result = Reflect.apply(...arguments);
            //         const endTime = Date.now();
            //         console.log(`cost: ${propKey}`, startTime, endTime, endTime - startTime);
            //         return result;
            //     }
            // })

        }
    })
    return proxy;
}

