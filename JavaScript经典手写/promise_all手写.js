var p1 = Promise.resolve(1),
    p2 = Promise.resolve(2),
    p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(function(results) {
    console.log(results); // [1, 2, 3]
});

function promiseAll(promises) {
    return new Promise(function(resolve, reject) {
        if (!isArray(promises)) {
            return reject(new TypeError('arguments must be an array'));
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
        for (var i = 0; i < promiseNum; i++) {
            // (function(i) {
            //     console.log(i)
            //     Promise.resolve(promises[i]).then(function(value) {
            //         resolvedCounter++
            //         resolvedValues[i] = value
            //         if (resolvedCounter == promiseNum) {
            //             return resolve(resolvedValues)
            //         }
            //     }, function(reason) {
            //         return reject(reason)
            //     })
            // })(i)

            console.log(i)
            Promise.resolve(promises[i]).then(function(value) {
                resolvedCounter++
                resolvedValues[i] = value
                if (resolvedCounter == promiseNum) {
                    return resolve(resolvedValues)
                }
            }, function(reason) {
                return reject(reason)
            })

        }
    })
}

promises = [p1, p2, p3]