let arr = [1,2,7,3,4,2,1]

var mp = new Map()

for(let i=0; i<arr.length; i++){
    let x = arr[i]

    if(mp.has(x)){
       mp.set(x, mp.get(x)+1)
    }else {
        mp.set(x, 1)
    }
}

mp.forEach((value , key)=>{
    console.log("keys=" , key , "and value=" , value)
})

// let arr = [1, 2, 5, 2, 2, 5, 4]
// var len = arr.length
// var mp = new Map()

// for(let i=0; i<arr.length; i++){
//     let x = arr[i]

//     if(mp.has(x)){
//        mp.set(x, mp.get(x)+1)
//     }else {
//         mp.set(x, 1)
//     }
// }
// console.log(mp)
// let ans =[]
// mp.forEach((value , key)=>{
//     ans.push(len-value)
// })

// console.log(ans)

