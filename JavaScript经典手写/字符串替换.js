// js 截取两个字符串直接的内容
var str = "My name is ${name} and my age is ${age}";
person={
    name :'lily',
    age: 11
}
function foo(str,person){
    let key = ''
    let i = 0
    let flag = 0
    let newStr = ''
    while(i<str.length){
        if(flag===0 && str[i]!=='$'){
            i+=1
            newStr += str[i]
        }
        if(str[i]==='$'){
            flag = 1
            i+= 2
        }
        if(flag===1 && str[i]!=='}'){
            key += str[i]
            i+= 1
        }
        if(str[i]==='}'){
            flag = 0
            console.log('key:',person.name)
            newStr += person[key]
            key = ''
            i += 1
        }
    }
    console.log(newStr)
}
foo(str)