// Solve this question on VScode:-

// Calculate the frequency of each word in the given string.


// Q :- Given a string str, the task is to find the frequency of each word in a string.
// Examples: 
// Input: str = “Success is not the key of Happiness, Happiness is the key of success”. 
// Output: 
// Success :- 2
//  is :-2
// Not:-1
// The:-2
// Key:-2
// of  :- 2
//  Happiness:- 2

str = "Success is not the key of Happiness, Happiness is the key of success"
str=str.split(" ")
let freq={}
for(let i=0;i<str.length;i++){
if(freq[str[i]]==1){
    freq[str[i]]+=1
}else{
    freq[str[i]]=1
}
}
console.log(freq)

