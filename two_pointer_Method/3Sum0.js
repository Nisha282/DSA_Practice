/*Q2.Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
Input:  arr[] = {0, -1, 2, -3, 1}
Output:  (0 -1 1), (2 -3 1)
 Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0 
 leetcode-15
 */

 function threeSum(arr){
    let result=[]
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length-2;i++){
        let j=i+1
        let k=arr.length-1
        if(arr[i]==arr[i-1]){
            continue
        }
        while(j<k){
              let sum=arr[i]+arr[j]+arr[k]
               if(sum==0){
                result.push([arr[i],arr[j],arr[k]])
                 while(arr[j]==arr[j+1]) j++
                 while(arr[k]==arr[k-1]) k--
                 j++
                 k--
               
               }else if(sum>0){
            k--
        }else{
            j++
        }
    }
}
return result
}
console.log(threeSum([0, -1, 2, -3, 1]))