// let n = 3;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);



// ======================================================

let n=3
 for(let i=1;i<=n;i++){                              
    let str=""
    for(let j=1;j<=i;j++){
        str+="*"
    }
    console.log(str)
 }
for(i=n-1;i>=1;i--){
    let str1=""
    for(let j=1;j<=i;j++){
        str1+="*"
    }
    console.log(str1)
}