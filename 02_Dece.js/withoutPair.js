let arr = [12,3,4,8,5,20,7,7,4,3,8,20]

let mp = new Map()

for(let i=0; i<arr.length; i++){
    let x = arr[i]
    if(mp.has(x)){
           mp.set(x, mp.get(x)+1)
    }else{
        mp.set(x,1)
    }
}

let ans = []

mp.forEach((value , key ) =>{
    if(value&1){
        ans.push(key)
    }
})

console.log(ans)