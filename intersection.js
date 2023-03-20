var intersection = function(nums1, nums2) {
    let insertionval=nums1.filter((n)=>{
        return nums2.includes(n)
    }) 
     return [...new Set(insertionval)]
};

// ==============================

// program to perform intersection between two arrays

function Intersection(arr1, arr2) {

    const Result = arr1.filter(x => arr2.indexOf(x) !== -1);
 
    return Result;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const ans = Intersection(array1, array2);
console.log(ans);