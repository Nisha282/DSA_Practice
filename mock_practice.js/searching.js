// Find Minimum in Rotated Sorted Array


function minimumRotated(){
let arr =[3,4,5,1,2]
// let arr = [4,5,6,7,0,1,2] /   
let left = 0;
let right = arr.length-1;
let mid ; 

while(left <right){

    mid = Math.floor(left+(right-left)/2)
  if(arr[mid] > arr[right]){
    left++
    console.log(left)

  }else{
    right = mid
  }
 return arr[left]
 
}

}

minimumRotated()