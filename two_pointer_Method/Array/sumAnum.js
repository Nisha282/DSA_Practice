// How do you sum all the elements in an array
// let arr = [1,3,5,7,9]
function sum(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
return sum
}
console.log(sum([1,3,5,6]))