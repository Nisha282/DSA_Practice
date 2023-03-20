let nums =[2,4,3,7,9,12,45]

var maxSubArray = function(nums) {
    let max=-Infinity
    let sum=-Infinity
    for(let i=0;i<nums.length;i++){
        sum=Math.max(0,sum)
        sum+=nums[i]
        max=Math.max(max,sum)
        
    } return max
};

console.log(maxSubArray(nums))