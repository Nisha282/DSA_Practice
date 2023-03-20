let str = "naman"

let start =0; end = str.length-1;

while(start<end){
    if(str[start] == str[end]){
        start++;
        end--
    }else{
        console.log("not a palindrome")
        break;
    }
    console.log("palidrome")
    break;

}