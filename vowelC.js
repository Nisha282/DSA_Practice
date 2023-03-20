
function countVowel(str){
    let vowel=["a","e","i","o","u"] 
    let vowelCount=0
    let consonentCount=0
    for(let i=0;i<str.length;i++){
     if(str[i]==" "){
        continue
     }
     else if(vowel.includes(str[i])){
        vowelCount++
     }else{
       consonentCount++
     }
    }
    return ([vowelCount,consonentCount])
}

console.log(countVowel("hello world"))