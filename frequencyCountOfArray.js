// FREQUIENCY COUNT OF ARRAY


// let array = [1, 3, 5, 3, 5, 3, 5, 2, 5, 6, 3];

// let freq = {}
// // console.log(freq)
// for (let i = 0; i < array.length; i++) {
//     if (freq[array[i]]) {
//         freq[array[i]] += 1
//     } else {
//         freq[array[i]] = 1
//     }
// }
// console.log(freq)


//===============================================================================

// Compair 1st array is the squire of 2nd array

// let arr1 = [1, 2, 3]
// let arr2 = [1, 4, 9]

// let freq1 = {}
// let freq2 = {}

// for (let val in arr1) {
//     if (freq1[arr1[val]]) {
//         freq1[arr1[val]] += 1
//     } else {
//         freq1[arr1[val]] = 1
//     }
// }

// for (let val in arr1) {
//     if (freq2[arr2[val]]) {
//         freq2[arr2[val]] += 1
//     } else {
//         freq2[arr2[val]] = 1
//     }
// }

// for (let key in freq1) {
//     if (!(key ** 2 in freq2)) {
//         console.log(false)
//         break
//     }
//     if (freq2[key ** 2] != freq1[key]) {
//         console.log(false)
//         break
//     }

// }
// // console.log(true)
// // ======================================================


// // print the duplocates in an array:

function duplicates(arr){
    let freq = new Map()
    for(let i=0; i<arr.length; i++){
        if(freq.get(arr[i]) == undefined ) {
        freq.set(arr[i] , 1)
        }
        else freq.set(arr[i] ,
             freq.get(arr[i])+1)
    }
    console.log(freq)
    let result =[]
for(let pairs of freq){
    if(pairs[1]> 1) result.push(pairs[0])
}
return result
}
var res = duplicates([23,12,1,9,2,2 ,23,12 ])
 console.log(res)