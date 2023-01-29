// swap 2 numbers without using 3rd temp variable -

// let a= 5;
// let b = 10;
// a= a+b;
// b = a-b; 
// a= a-b;

// console.log(a , ", " , b)

// swap 2 string without using a third variable -
let x = "Some"
let y = "Good"
let z = x.concat(y)
console.log(z)

// x = "SomeGood" concat x and y (x= x+y)
// y= x-y(use slice and length of y) = "Some"
// x = x-y(use slice and length of y. remove characters from start) = "Good"
// =============================================================================

// reverse array without using extra array 
// let arr = [12,4,6,8,14] => [14,8,6,4,12]

function reverse(arr){
    let i=0;
    let j = arr.length-1
    while(i<j){
        arr[i] = arr[i]+arr[j] // a= a+b
        arr[j] = arr[i]-arr[j] // b= a-b
        arr[i] = arr[i]-arr[j] //a= a-b
       i++;
       j--
    } 
    return arr
}
let array = [12,5,65,9,14]
var res =reverse(array)
console.log(res)

// ==========================================================================

// write a js program to cyclically rotate an array - rotste(arr,d) that rotates arr by d elements
let arr = [12,3,6,2,9,11]
rotate (arr , 2) //=>[9,11,12,3,6,2]

// techniques-
//arr = reverse(arr)
// arr[1st two element] = reverse(arr (1st two elements))
// arr[remaining element] = reverse (arr[remaining elements])

// ===========================================================================================

// Given an array of repeated elements, return the most repeated element from the array 
// highest frequency element in an array

// let arr = [23, 56, 678, 12, 2,34, 23, 98, 12,3,12,2,12]
// step 1 : frequency counter method : create a hash map of the above array 
// step 2: iterate over the map and return the element with highest frequency

// ====================================================================================

// find the maximum sum of any two elements in an array - finding the largest and secondLargest element in arr
// let array = [12,4,67,2,34].........................(67+34)
// maintain 2 variables ; 