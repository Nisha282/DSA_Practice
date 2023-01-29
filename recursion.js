        //===================RECURSION==============================

// division by 7        
// function div(arr){
//     if(arr.length ==0){
//         return 1
//     }else {
//         let ele = arr.pop()
//         if(ele%7==0){
//             console.log("yes")
//         }else{
//             console.log("No")
//         }
//          div(arr)
//     }
// }
// arr = [14,23,67,70,77 , 101,7,24]
// var res=div(arr)
// console.log(res)
// ===================================================================================

//write a function to countdown from n to 1

// function countDown(n){
//     if(n==1){
//       return 1
//     }else{
//         // console.log(n)
//         return n+countDown(n-1)
//         // countDown(n)
//     }
// }
// n= [14,23,67,70,77 , 101,7,24]
// var res=countDown(5)
// console.log(res)

//=====================================================================================


// return the sum of 1 to n-
// function sumUpto(n){
//     if(n==1){
//         return 1
//     }else{
//         return n+sumUpto(n-1)
//         // sumUpto(n)
//     }
    
// }
// var res = sumUpto(5)
// console.log(res)
// ========================================================================


// factorial of n!-
// function fact(n){
//     if(n==1){
//         return 1
//     }else {
//         return n* fact(n-1)
//     }
// }
// var res = fact(5)
// console.log(res)
// ======================================================================


// fibonacci --
function fibo(n){
    if(n<=2){
        return 1
    }else{
        return fibo(n-1)+fibo(n-2)
    }
}
var res = fibo(8)
console.log(res)

// ================================================================

// multiplication or product of array-
// function product(arr){
//     if(arr.length==0){
//         return 1
//     }else{
//         return arr[0]* product(arr.splice(1))
//     }
// }
// arr = [3,5,2,8]
// var res = product(arr)
// console.log(res)
// ======================================================================

// power -

// function pow(b , exp){
//     if(exp==0){
//         return 1
//     }else{
//         return b*pow(b, exp-1)
//     }
// }
// var res = pow(2,10)
// console.log(res)
// ===========================================================================

// write a program to reverse a string :-
//  function reverse(str){
//   if(str.length<=1){
//     return str
//   }else{
//     return reverse(str.slice(1)) + str[0]
//   }
//  }
// //  reverse("hello")
// var res = reverse("hello")
// console.log(res)
// =======================================================================================

// check if a string is palindrome or not :-
// function isPlr(str){
//   if(str.length<=1){
//     return true
//   }else{
//     return (str[0]== str.slice(-1) && isPlr(str.slice(1, -1)))
//   }
// }
// var res = isPlr("nisha")
// console.log(res)
// ====================================================================================

// write a program to flatten an array:-

// function flattenArr(arr){
//   let flat = []
//   for(var i=0; i<arr.length; i++){
//     if(Array.isArray(arr[i])==false) flat.push(arr[i])
     
//     else flat = flat.concat(flattenArr(arr[i]))
       
//   }
// return flat
// }
// var res = flattenArr(["a" , "b",["c" ,[[["d", "e"]]]]])
// console.log(res)

// function flattenArr(arr){
//       let flat =  []
//       for(var i = 0; i<arr.length; i++){
//   // console.log(arr)
//         if(Array.isArray(arr[i]) == false)  flat.push(arr[i])
//         else flat =  flat.concat(flattenArr(arr[i]))
//     }
//        return flat
     
//     }
      
//     let result = flattenArr(["a","b",["c",[ [ ["d","e"] ] ] ] ])
    // console.log(result)
// ==========================================================================

// function capital(str){
//   const arr = str.split(" ");
//     for(let i=0; i<str.length ; i++){
//       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
    
//    return  arr.join(" ");
//     }
  
//   var res =capital (["nisha" ,"neha"])
//   console.log(res)


// =================================================================================================
//  write a program to capitalize the first letter of all the string in an array of string 


// function capitalise (arr){
//   let result = []

//   if(arr.length === 0) return []

//   let s = arr[0] [0].toUpperCase() + arr[0].slice(1)
//   // let s = arr[0].toUpperCase() // all string convert into capital 
//   result.push(s)

//   return result.concat(capitalise(arr.slice(1)))
//  }

//  var res = capitalise(["nisha" , "abc" , "mummmyy" ])
//  console.log(res)

//  ==================================================================================
// write a program to reverse each word  of string :-
function reverse(str){
  if(str.length===0){
    return ""
  }else{
    return reverse(str.slice(1)) + str[0]
  }
 }
 function revSentWord(sent){
  let words = sent.split(" ")
  for(let i=0; i<words.length; i++){
    words[i] = reverse(words[i])
  }
  return words.join(" ")
 }
var res = revSentWord("hello all of you")
console.log(res)