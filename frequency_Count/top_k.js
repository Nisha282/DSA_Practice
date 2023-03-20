/* https://leetcode.com/problems/top-k-frequent-elements/

Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

 Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

*/
// of - itterate
// in - available

let  nums = [1,1,1,2,2,3], k = 2
function topKFreqent (nums,k){
    let mp = new Map();
    for(let i of nums){
        if(!mp.has(i)){
            mp.set(i,1)
        }else{
            mp.set(i, mp.get(i)+1)
        }
    }
    let sortedArr =[...mp.keys()].sort((a,b)=> mp.get(b)-mp.get(a)).slice(0,k);
    return sortedArr;
    
   
}

console.log(topKFreqent(nums,k))