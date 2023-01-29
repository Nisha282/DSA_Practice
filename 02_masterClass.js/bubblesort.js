//Bubble Sort


let arr = [5,2,7,2,9,6,2,11,4];


const bubbleSort = (arr) => {
    
    let n = arr.length;
    
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++)
        {
            if(arr[j]> arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        
  
    }
}

bubbleSort(arr);
console.log(arr)

/*
const InprovedbubbleSort = (arr) => {
    
    let n = arr.length;
    
    for(let i=0;i<n-1;i++){
               let isSwapped = false;

        for(let j=0;j<n-1-i;j++)
        {
            if(arr[j]> arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;

            }
        }
       if(isSwapped == false )
            break;
    }
}
*/
//TC: O(n^2) 
//Best Case TC: Omega (n) or O(n)
//SC: O(1)
