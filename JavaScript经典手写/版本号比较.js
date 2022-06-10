/**
 * leetcode165
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    let vlist1= version1.split('.')
    let vlist2 = version2.split('.')
    let len = Math.min(vlist1.length,vlist2.length)
    for(let i=0;i<len;++i){
        if(Number(vlist1[i])>Number(vlist2[i])){
            return 1
        } 
        if(Number(vlist1[i])<Number(vlist2[i])){
            return -1
        }
    }
    if(vlist1.length>len){
        for(let j=len;j<vlist1.length;++j){
            if(Number(vlist1[j])!==0){
                return 1
            }
        }
    }
    if(vlist2.length>len){
        for(let j=len;j<vlist2.length;++j){
            if(Number(vlist2[j])!==0){
                return -1
            }
        }
    }
    return 0

};