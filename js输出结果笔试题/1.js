var name = 'hong'
var xm = {
    name: 'xm',
    doSth() {
        console.log('我是小明，呼叫', this.name)
    },
    doOther: () => {
        console.log('我是小明，呼叫', this.name)
    }
}
var doSth = function() {
    console.log(this.name)
    return function() {
        console.log(this.name)
    }
}
var xw = {
    name: 'xw',
    doSth: doSth
}
doSth() //hong
xm.doSth() //我是小明，呼叫xm
xm.doOther.call(xw) //我是小明，呼叫hong 箭头函数，指向外层this

xw.doSth.call(xm)
    //xm call的第一个参数是要绑定的对象，不写默认值是window
xw.doSth.call()
    //hong
xw.doSth()() //不写call，绑定.前面的对象
    //xw
    //hong

X