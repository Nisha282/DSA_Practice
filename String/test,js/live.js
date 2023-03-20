// const number = [1,2,3,4,5];
// // const double = number.map((num)=>num*2);

// const double = number.reduce((acc , cuu) =>acc+cuu , 0)
// console.log(double)


// const arr = [1,3,5];
// let target = 7;

// function findPairSum(arr , target){
//     const map = {};
//     for(let i=0; i<arr.length; i++){
//         const currNum = arr[i];
//         const diff = target - currNum;
//         if(diff in map){
//             return [diff , currNum]
//         }else{
//             map[currNum] = true;
//         }
//     }
//     return [];
// }
// console.log(findPairSum(arr, target))



// function findCloseSum (arr , target){
//     arr.sort((a,b)=> a-b);

//     let left =0;
//     let right = arr.length -1;
//     let closePair = [arr[left] , arr[right]];
//     let smallDiff = Math.abs(target - (arr[left] + arr[right]))
//     while(left <right){
//         const currDiff = target - (arr[left] + arr[right]);
//         if()
//     }
// }