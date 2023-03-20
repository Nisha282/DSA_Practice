let arr = [1, 2, 3, 4, 6, 8, 9, 10]
target = 12

let start = 0, end = arr.length - 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[start] + arr[end] == target) {
    
        console.log(arr[start], arr[end])
        break
// console.log(true)
// break
    } else if (arr[start] + arr[end] < target) {
        start++

    } else {
        end--
    
    }
   
}
