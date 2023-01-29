// palindrome 
/*A palindrome is used to verify a sequence of numbers, strings, or letters that are 
read left to right and right to left to match the same characters or return the same sequence of characters.*/

/*let str = "level"

let start = 0 , end = str.length-1;


while(start<end){
    if(str[start] == str[end]){
        start++
        end--
    }else{
    console.log("it is not a palidrome")
    break;
}
console.log("it is  a plaidrome ")
break
}
*/


// ===============================================================================
// target sum


let arr = [1, 2, 3, 4, 6, 8, 9, 10]
target = 12

let start = 0, end = arr.length - 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[start] + arr[end] == target) {
    
        console.log(arr[start], arr[end])
        break
// console.log(true)
// break
    } else if (arr[start] + arr[end] < target) {
        start++

    } else {
        end--
    
    }
   
}

// ================================================================

// anagram 
/*
An anagram of a string is another string that contains the same characters, 
only the order of characters can be different.For example, “abcd” and “dabc” are an anagram of each other.*/
function checkAnagarm(n1 , n2){

    let len1 = n1.length
    let len2 = n2.length
    if(len1 !== len2){
        console.log("invalid input")
    }

    let str1= n1.split('').sort().join('')
    let str2 = n2.split('').sort().join('')

    if(str1 === str2){
        console.log("match")
    }else{
        console.log("unmatch")
    }
}

checkAnagarm("nisha","ishan")
// ======================================================================


