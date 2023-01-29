// sw
let arr = [1, 2, 3, 4, 54, 5, 5, 3];
let k = 3;

let sum = 0;
let max = 0;

for (let i = 0; i < k; i++) {
    sum += arr[i]
}

max = sum

for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k] //4-[3-3] => 4-[0]  => 4-1= 3
    // console.log(sum)
    max = Math.max(max, sum)
    // console.log(max);
   if(max <sum)   
   max = sum
  
  
}
 console.log(max)
