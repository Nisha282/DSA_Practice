// merge sort 

// function mergeSort(arr, start , end){
//     if(start >= end) return 

// let mid = Math.floor(start +(end-start)/2)
//  mergeSort(arr , start , mid)
//  mergeSort(arr , mid+1 , end)
  
// merge(arr , start , mid , end)
// }


// function merge(arr, start , mid , end ){
//    let arr1 =[]
//    let arr2 = []

//    var lenArr1 = mid -start -1
//    let lenArr2 = end - mid // end -(mid+1) +1 => end - mid

// } 
// for(let i=0; i<lenArr1; i++){
//     arr1[i] = arr[start +i]
// }
// for(let j=0; j<lenArr2; j++){
//     arr2[j] = arr[mid+1 +j]
// }

// let a=0 // index of arr1
// let b = 0 //index of arr2
// let c = start 

// while(a<lenArr1 && b< lenArr2){
//     if(arr1[a] <= arr2[b]){
//         arr[c] = arr1[a]
//         a++
//     }else{
//         arr[c] = arr2[b]
//         b++
//     }
//     c++
// }
// while(a<lenArr1){
//     arr[c] = arr1[a]
//     a++
//     c++
// }
// while(b<lenArr2){
//     arr[c] = arr2[b]
//     b++
//     c++
// }

// var res = mergeSort([283, 12,6,89,34,56])
// console.log(res)
// ------------------------------------------------------------------------

