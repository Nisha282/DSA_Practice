//  How do you get the matching elements in an integer array



let arr = [1, 2, 3, 4, 5, 1, 2, 6, 7,7 ]

for(let i= 0; i<arr.length ; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] == arr[j]){
            // return arr[i]
            console.log(arr[i])
        }
    }
}

