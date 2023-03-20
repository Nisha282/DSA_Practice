function removeNo(str){
    
    let num=["0","1","2","3","4","5","6","7","8","9"]
    let result=""
    for(let i=0;i<str.length;i++){
        if(num.includes(str[i])){
           result+=" "
        }else{
            result+=str[i]
        }
    }return result
}
console.log(removeNo("abjlijpg5iojgo5gbg"))