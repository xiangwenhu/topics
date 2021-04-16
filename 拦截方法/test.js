
const keys = ["random","sum", "unique"];


const proxyTestObject = new OProxyTestObject();

// const proxyTestObject = new ProxyTestObject();

// const proxyTestObject = new ProxyTestObject2();

// const proxyTestObject  = new InheritTestObject();

// const proxyTestObject = new DynamicProxy(TestObject);
// proxyTestObject.inject(keys);

// const proxyTestObject = new ProxyProxyTestObject();

// const proxyTestObject = new DefineP(keys);

const sumArr = Array.from({ length: 99999 }, (v, k) => {
    return k
});

const baseArr = Array.from({ length: 99999 }, (v, k) => {
    return {
        id: k
    }
});
const uniqueArr = [baseArr, [{
    id: 11
}, {
    id: 12
}], baseArr, [{
    id: -14
}], baseArr]


const result = proxyTestObject.random(10, 1000);
console.log("random:", result);
const sumValue = proxyTestObject.sum(sumArr);
console.log("sum:", sumValue);
const uniqueValue = proxyTestObject.unique("id", ...uniqueArr)
console.log("unique:", uniqueValue.length);




