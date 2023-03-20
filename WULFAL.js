const arr = [1,10,12,6,7,9]

function len(arr){
    var count = 0;
    // while(arr){
    for(i in arr)
        // if(arr[i] ! = undefined)
        count++
    return count;
    // }
}
var total = len(arr)
console.log(total)