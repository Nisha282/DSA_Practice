// Search a 2D Matrix

var searchMatrix = function(matrix, target) {
    let i=0
    let j=matrix[0].length-1
   let a=matrix.length-1
   while(i<=a&&j>=0){
       if(matrix[i][j]==target){
           return true
       }
       else if(target>matrix[i][j])
       i++
       else
       j--
   }
return false
};


