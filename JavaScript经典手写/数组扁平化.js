//按照指定深度进行数组扁平化，若不指定深度，去掉deep参数
function flatten(arr,result,deep){
    if (Array.isArray(arr)===false||deep===0){
        result.push(arr)
        return result;
    }
    arr.forEach(item => {
        deep -= 1
        flatten(item,result,deep)
    });
    
}
let res = []
flatten([[[3,'qqq']],1],res,3)
console.log(res)