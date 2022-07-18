// 方法一：用set
function unique1(arr){
    let newArr = [...new Set(arr)]
    return newArr
}
let arr = [1,1,2,3,4,5,5]
console.log(unique1(arr))

// 方法二：includeOf
function unique2(arr){
    let newArr = []
    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    });
    return newArr
}
console.log(unique2(arr))