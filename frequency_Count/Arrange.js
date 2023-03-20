/*https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab

iven an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.
*/

let N=6;
let arr =[0,1,2,1,2,0]
function sort012(arr , N){
    let zero=0, one=0 , two=0;
    for(let i=0; i<N; i++){
        if(arr[i] === 0)
        zero++;

        else if(arr[i]=== 1)
        one++;
        else
        two++
    }
    while(zero--){
        arr.push(0)
    }
    while(one--){
        arr.push(1)
    }
    while(two--){
        arr.push(2)
    }
     arr.splice(0,N)
     return arr
}
console.log(sort012(arr,N))