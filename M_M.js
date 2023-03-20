function mean(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum+= arr[i]
    }
    return sum/arr.length;
}

// another way to find mean - 
/*let sum = arr.reduce((a-b)=> a+b,0)
return sum/arr.length;
*/
// ----------------------------------------------------------------------------------------



function median(arr){
    arr = arr.sort();
  if (arr.length % 2 === 0) { // arr with even number elements
    return (arr[arr.length/2] + arr[(arr.length / 2) - 1]) / 2;
  }
  else {
    return arr[(arr.length - 1) / 2]; // arr with odd number elements
  }

}

function mode(arr){

}


const arr =[25,17,40,63,25,54,70]
// console.log(mean(arr))
console.log(median(arr))
// console.log(mode(arr))