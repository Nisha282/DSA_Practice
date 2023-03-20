let n=23
let no=n.toString()

let sum=0
for(let i=0;i<no.length;i++){
    sum+=parseInt(no[i])
}

if(sum%2==0){
    console.log("nisha number")
}else{
    console.log("not a nisha number")
}