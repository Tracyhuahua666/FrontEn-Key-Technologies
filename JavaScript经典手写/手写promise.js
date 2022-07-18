let p = new Promise((resolve,reject)=>{
    let num=5
    if(num>10){
        resolve('num is larger then 10 and num is '+num)
    } else{
        reject('num is less than 10 and num is '+num)
    }
})
p.then(
    function(message){
        console.log(message)
    },
    function(message){
        console.log(message)
    }
)
class _Promise{
    static PENDING ='pending'
    static RESOLVE = 'resolve'
    static REJECT = 'reject'
    constructor(fn){
        this.status = _Promise.PENDING
        this.result = null
        fn(this.resolve.bind(this),this.reject.bind(this))
    }
    resolve(result){
        if(this.status===_Promise.PENDING){
            this.status = _Promise.RESOLVE
            this.result = result
        }
    }
    reject(result){
        if(this.status === _Promise.PENDING){
            this.status = _Promise.REJECT
            this.result = result
        }
    }
}
let p2 = new _Promise((resolve,reject)=>{
    let num=5
    if(num>10){
        resolve('num is larger then 10 and num is '+num)
    } else{
        reject('num is less than 10 and num is '+num)
    }
})
// p2.then(
//     function(message){
//         console.log(message)
//     },
//     function(message){
//         console.log(message)
//     }
// )