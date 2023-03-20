// find the largest word in a sentences

function largestWord(str){
    let max = 0;
    let count =0;
    for(let i=0; i<str.length; i++){
        if(str[i+1]== " " || str[i+1] == undefined){
            max = Math.max(max, count)
            count =0
        }else{
            count++
        }
    }
    return max
}
console.log(largestWord("hi my name is nisha sahu nishaaa"))


// ====================================================================

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