/* sliding window work on two types:
-> Array
->String */

//-> array .find the max sum for the fixed window size

let arr = [1, 2, 3, 4, 54, 5, 5, 3];
k = 3;


let sum = 0
let max =0

for(let i=0; i<k; i++){
    sum += arr[i]
}
max = sum 

for(let i=k; i<arr.length; i++){
      sum+= arr[i] - arr[i-k]
    if(max < sum){
        max = Math.max(max , sum)
    }
}
console.log(max)


// =====================================================================================================

// Longest Substring Without Repeating Characters


let s = "abcdefcd"
 let freq = {}

 let start = 0 
 let ans = 0
 for(let end=0; end <s.length; end++){
    while(freq[s[end]] == 1){
        freq[s[start]] =0;
        start++
    }
    freq[s[end]] =1

    ans = Math.max(ans , end-start+1)
  
 }
 console.log(ans)

// ===========================================================================



















