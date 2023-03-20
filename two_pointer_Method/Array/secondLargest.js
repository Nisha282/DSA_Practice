// How would you find the second largest number in an array

let array = [1,5,7,9,12,8,10,15];

array.sort((a,b)=>a-b).reverse();
// sort- o(nlogn)
console.log(array[1])

// --------------------------------------

let arr = [1,5,7,9,13,8,10];
let n= arr.length;

let highest = -Infinity;
let secondHighest = -Infinity;

for(let i=0; i<n; i++){
    highest = Math.max(highest, arr[i])
}

for(let i=0; i<n ; i++){
    if(arr[i]<highest){
        secondHighest = Math.max(secondHighest, arr[i])
    }
}

console.log(highest , secondHighest)

// o(n)
// -----------------------------------

let arrr = [2,4,8,6,14];
let high = -Infinity;
let secondHigh = -Infinity;

for(let j=0; j<arrr.length; j++){
    if(arrr[j]>high){
        secondHigh= high;
        high =arrr[j];
    }
}
// o(n)
console.log(high , secondHigh)


