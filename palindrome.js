let string = "NAMAN"
// let string = "MAYANK"

let start= 0, end= string.length-1;

while(start < end){
    if(string[start] == string[end]){
        start ++
        end --
    }else{
        console.log("not palindrome")
        break
    }
    console.log("palindrome")
    break
}


