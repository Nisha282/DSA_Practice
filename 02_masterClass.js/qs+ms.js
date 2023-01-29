//merge sort
var merge = (arr1,arr2) => {
    let res =[];
    let i=0, j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] <= arr2[j]){
            res.push(arr1[i++]);
            // i++;
        }else{
            res.push(arr2[j++]);
            // j++;
        }
    }

    while(i<arr1.length){
        res.push(arr1[i++]);
        // i++;
    }

    while(j<arr2.length){
        res.push(arr2[j++]);
        // j++;
    }
    return res;
}

var sortArray = function(nums) {
    if(nums.length <= 1) return nums;

    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));

    return merge(left,right);
}

// =====================================================================================================


//quick sort
// var sortArray = function (nums,low = 0, high = nums.length-1) {
//   if(low<high){
//         let pivotIndex = partition(nums,low,high)
//         sortArray(nums,low,pivotIndex-1)
//         sortArray(nums,pivotIndex+1,high)
//     }   
//     return nums
// };

// function partition(arr, low = 0, high = arr.length-1) {
//   let pivot = arr[high];
//   let i = low - 1;

//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
//   i++;
//   let temp = arr[i];
//   arr[i] = pivot;
//   arr[high] = temp;
//   return i;
// }
















