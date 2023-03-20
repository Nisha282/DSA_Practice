/* 
Q1 Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array. 
a).
Input:  ar1[] = {1, 4, 5, 7};
        ar2[] = {10, 20, 30, 40};
        x = 32      
Output:  1 and 30

b).
Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54

Output: 22 and 30*/

function closest(arr1, arr2, target) {
        let tem = Infinity;
        let res = [];
        let i = 0, j = 0;
        while (i < arr1.length && j < arr2.length) {
          let sum = arr1[i] + arr2[j];
          if (Math.abs(sum - target) < tem) {
            tem = Math.abs(sum - target)
            res =[ arr1[i], arr2[j]];
          }if(sum < target){
            j++
          }else{
            i++
          }
        }
        return res
      }
      
      let ar1 = [1, 4, 5, 7];
      let ar2 = [10, 20, 30, 40];
      let x = 32;
      console.log(closest(ar1, ar2, x));


//       -------------------------------------------
// b).
// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54

// Output: 22 and 30

function closet(arr,x){
    let proximiy=Infinity
    let start=0
    let result=[]
    let end=arr.length-1
    for(let i=0;i<arr.length;i++){
        if(Math.abs(arr[start]+arr[end]-x)<proximiy){
       result=[arr[start],arr[end]]
       proximiy=Math.abs(arr[start]+arr[end]-x)
    }else if(arr[start]+arr[end]-x>0){
        end--
    }else{
        start++
    }
}return result
}
console.log(closet([10, 22, 28, 29, 30, 40],54))