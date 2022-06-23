
// input: " http://www.qq.com?age=2&name=leili&name=meimeihan&gender=male "
// output:

// {     "age": "2",     "name": [         "leili",         "meimeihan"     ],     "gender": "male" }

let inputStr =  " http://www.qq.com?age=2&name=leili&name=meimeihan&gender=male "
function getObj(inputStr){
    let outputMap = new Map()
    let paras = inputStr.split('?')[1].split('&')
    paras.forEach(item => {
        let kv= item.split('=')
        let k = kv[0]
        let v = kv[1]
        if(!outputMap.get(k)){
            outputMap.set(k,v)
        } else if(!Array.isArray(outputMap.get(k))){
            let vArr = [outputMap.get(k)]
            vArr.push(v)
            outputMap.set(k,vArr)
        } else{
            outputMap[k].push(v)
        }
    });
    obj = {}
    outputMap.forEach((value,key)=>{
        obj[key] = value
    })
    return obj

}
console.log(getObj(inputStr))

