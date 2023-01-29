

function bubble(arr){
    for(let i=0; i<=arr.length-1; i++){
        let swap = false;

for(let j=0; j<=arr.length-2; j++ ){
    if(arr[j] > arr[j+1]){
        // swap
        arr[j] = arr[j]+arr[j+1]
        arr[j+1] = arr[j]-arr[j+1]
        arr[j] = arr[j]-arr[j+1]
        swap = true
    }
}
 if(swap == false)
break;        
    }
    return arr;
}

var res = bubble([283, 12,6,89,34,56])
// bubble(arr)
console.log(res)
