/* Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

Example 1:

Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.*/

let n= 5, s = 12
let arr = [1,2,3,7,5]
function subArray(arr, n,s){
    let start =0;
    let sum=0;
    let end =0;

    if(s===0) return[-1];

    for(let i=0; i<n; i++){
        sum +=arr[i];

    

    while(sum>s){
        sum = sum-arr[start];
        start++
    }

    if(sum ===s){
        end =1;
        return[start+1, i+1]
    }
}
if(end ===0){
    return [-1]
}
}

console.log(subArray(arr,n,s))