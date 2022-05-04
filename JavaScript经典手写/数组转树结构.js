function array2Tree(data, pid){
    let res = [];
    data.forEach(item => {//遍历查找pid对应节点的子节点，放到数组中
        if(item.parent === pid){
            res.push(item);
            let itemChildren = array2Tree(data,item.id);
            if(itemChildren.length!=0){
                item.children = itemChildren;
            } 
        }
    });
    return res;
}

let arr = [
    {id:5,parent:4},
    {id:2,parent:0},
    {id:3,parent:1},
    {id:1,parent:0},
    {id:4,parent:1},
    {id:0,parent:-1}
]
restreeObj = [
    [{id:0,parent:-1,child:
        [{id:2,parent:0},{id:1,parent:0,child:
            [{id:3,parent:1},{id:4,parent:1,child:{id:5,parent:4}}]
        }]
    }]
]
treeObj = array2Tree(arr,-1)
console.log(JSON.stringify(treeObj))