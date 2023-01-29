// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
/*
var findDuplicate = function(nums){
    var mp = new Map()

    for(let i = 0; i<nums.length; i++){
        let x = nums[i]
        if(mp.has(x)){
            mp.set(x, mp.get(x)+1)
        }else{
            mp.set(x,1)
        }
    }

    let ans =[]
    mp.forEach((value , key)=>{
        if(value>1){
            ans.push(key)
        }
    })
    return ans
}

let nums =  [1,3,4,2,2]
let res = findDuplicate(nums)
console.log(res)
*/

/*
var findDuplicate = function(nums){

    for(let i=0 ; i<nums.length; i++){
        let index = nums[i]-1

        if(nums[index] < 0){
            return nums[i]
        }else{
            nums[index] = nums[index] * -1
        }
    }
}
let nums =  [1,3,4,4,2]
let res = findDuplicate(nums)
console.log(res)
*/

let array = [1, 3, 4, 4, 2]

function findDuplicate(array){
    

    for(let i=0; i<array.length; i++){
        let index = Math.abs(array[i]) - 1
        if(array[index] < 0){
            return index +1
        }else{
            array[index] = array[index] * -1
        }
    }
}

console.log(findDuplicate(array))