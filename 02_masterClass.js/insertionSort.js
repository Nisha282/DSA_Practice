// Insertion Sort 



let arr = [5,2,7,2,9,6,2,11,4];

const  insertionSort = (arr) => {
    
    let n = arr.length;
    
    for(let i=1;i<n;i++){
        let key = arr[i];
        let j = i-1;
        
        
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
        
    }
}

insertionSort(arr);
console.log(arr);

