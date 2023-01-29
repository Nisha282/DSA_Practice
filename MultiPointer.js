// Multipointer
//que-1 :=> palindrome

// let string = "NAMAN"
// let string = "MAYANK"

// let start= 0, end= string.length-1;

// while(start < end){
//     if(string[start] == string[end]){
//         start ++
//         end --
//     }else{
//         console.log("not palindrome")
//         break
//     }
//     console.log("palindrome")
//     break
// }



//==========================================================
// Example 2: Given a sorted array of unique integers and a target integer,
//  return true if there exists a pair of numbers that sum to target, false otherwise. 
//  This problem is similar to Two Sum.
// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

/*
let  nums = [1, 2, 4, 6, 8, 9, 14, 15] , target = 13;
let start = 0, end = nums.length;

while(start < end){
  if(nums[start] + nums[end] == target){
    console.log(nums[start], nums[end])
    break
  }else if(nums[start] + nums[end] < target){
    start ++
  }else {
    end --
  }
  
}
*/

//===================================================================
// assertion
/*
let arr = [2, 4, 1, 3, 5,1]
let n = 5
let count = 0
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    if (arr[i] > arr[j + 1]) {
      count++
    } else {
      continue
    }
  }
}
console.log(count)

*/

//===============================================================
// anagram

//   college == ceolgle


// let str = college
// let str1 = ceolgle

// let i=0 , j=0;

// if(str.length==str1.length) {
//  while(i<str.length && j<str1.length){
//   
//  }
// }

// ==================================================================
let s= 'ace'
let t='cabcde'

let i = 0, j =0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
        //   console.log(s[i], t[j])
            i++;
        }else{
             j++;
        }
        
  } 
    let data =  i == s.length;
    console.log(i)
console.log(data)