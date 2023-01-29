//     function sum(){
//     let arr = [1,2,3,4,5,5,6,7];
//     target = 6;
//     let low =0;
//     let high = arr.length -1;
//      let  mid;

//     while(low<=high){
//      mid = Math.floor(low+(high-low)/2);
//     if(arr[mid] == target){
//         // return mid ;
//         console.log(mid)
//         break
//     }else if(arr[mid] < target){
//         low = mid +1
//     }else{
//        high = mid -1 
//     }
//   }
// }
// sum()

// ====================================================

const func = () => {
    let arr =[1,2,3,4,7,8,9,10]
    let target = 7;
    let low = 0;
    let high = arr.length -1;
    let mid;
    
     while(low<=high){
            mid = Math.floor(low+(high-low)/2);
            // console.log(mid)
            
            if(arr[mid] == target)
             { 
                 console.log(mid);
                 break
             }
               
            else if(arr[mid] < target)
            {
                low = mid+1;
            }
            else {
                high = mid -1;
            } 
          
        } 
//   console.log("bhkk ")
        //    break
    }
   func()

//    =======================================================================================
/*var findPeakElement = function(nums) {
  
    let low = 0;
  let high = nums.length-1;
  let mid;
  
  while(low <= high){
      
      mid = Math.floor(low+(high-low)/2);
      
      if(low == high)
       return low;
      
       else if(nums[mid] < nums[mid+1])
       low = mid+1;
       
       else {
           high = mid;
           
       }
  }

};*/
