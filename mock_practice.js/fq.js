
// single element check -
// map method 
let arr = [1,1,2,3,3,4,5,5]

let mp = new Map()
for(let i=0; i<arr.length; i++){
    let x = arr[i]

    if(mp.has(x)){
        mp.set(x, mp.get(x)+1)

    }else{
        mp.set(x, 1)

    }
}

let ans =[]

mp.forEach((value , key)=>{
    if(value == 1){ // 1 se jayda baar aayega tb 
        // if(value > 1){
        ans.push(key)
    }
})
console.log(ans)

// =================================================================================

// object method 

let array =[2,4,3,4,5,5,6,7]

let freq ={}

for(let i=0; i<array.length; i++){
    if(freq[array[i]]){
        freq[array[i]]+=1
    }else {
        freq[array[i]]= 1
    }
}
console.log(freq)



