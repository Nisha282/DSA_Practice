// let str = "success is not key ,success is not key"

let arr = [1, 2, 1, 3 , 4, 0 , 5 , 6 , 3];
 function duplicate(arr){
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !=arr[1+1]){
            arr[count] =arr[i]
            count++
        }
    }
 }
 console.log(duplicate(arr))