// 防抖是指事件触发一段时间后，才执行回调

function debounce(fn, ms) {
    var timeout = null // 为了避免使用计时器导致内存泄漏
    return function() {
        clearTimeout(timeout) //删除上个计时器的计时缓存
        timeout = setTimeout(() => {
                fn.apply(this, arguments)
            }, ms) // 计时，并返回计时器指针
    }
}


function getData() {
    console.log('发送请求...')
}
document.getElementById('searchInput').oninput = debounce(getData, 800)
    // 如果用户一直在输入，是不会发送请求
    // 只有用户连续输入时间间隔超过800ms之后才会请求一次数据，也就是用户在800ms内没有输入才会去请求数据



function debounce(fn, ms) {
    let timeout = null
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, ms)
    }
}