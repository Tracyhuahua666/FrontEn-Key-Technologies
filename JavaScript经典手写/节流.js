function throttle(fn,interval){
    var last = 0 // 记录上次触发时间
    return function(){
        var now = new Date() // 记录本次触发时间
        if(now-last>interval){ // 若时间差大于间隔时间参数，则触发
            fn.apply(this,arguments)
            last = now
        }
    }
}


