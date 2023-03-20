//  reverse string
/*  1. -> split -> 2. reverse -> join */


// 1. Reverse a String With Built-In Functions
// function reverseString(str){
//     var slit = str.split("");

//     var reve = slit.reverse();
//     var jo = reve.join("")
//     return jo
// }

// console.log(reverseString("hello"))



function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("hello"))

// ---------------------------------------------------

// 2. Reverse a String With a Decrementing For Loop


function revstr(st){
    var newString = "";
    for(let i= st.length-1; i>=0; i--){
        newString +=st[i];
    }
    return newString
}
console.log(revstr("nisha"))


// -----------------------------------------------------

// 3. Reverse a String With Recursion

function reverstr(s){
    if(s === "")
    return "";
    else
    return reverstr(s.substr(1)) + str.charAt(0);
}

console.log(revstr("sahu"))