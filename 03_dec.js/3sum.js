
let nums = [-1,0,1,2,-1,-4];


const threeSum = (nums, n) => {
    
    nums.sort((a,b) => a-b);
    
    let answer = [];
    
    for(let i=0;i<n-2;i++){
        
        let left = i+1;
        let right = n-1;
        
        while(left<right)
        {
            let sum = nums[i]+ nums[left]+nums[right];
            
            if(sum === 0)
            {
                answer.push([nums[i], nums[left], nums[right]]);
                
                while(nums[left+1] === nums[left])
                   { left++;}
                 while(nums[right-1] === nums[right])
                   { right--;}
                   
                left++;
                right--;
            }
            
            else if (sum < 0)
             left++;
             
            else
                right--;
        }
        
        while(nums[i] === nums[i+1])
            i++;
    }
    
    return answer;
} ;


console.log(threeSum(nums, 6));
//TC : O(n^2)
//SC: O(n)



