// recursion

// return the sum of 1 to n



function countDown(n){
    if(n == 1){
        return 1
    }
    return n+countDown(n-1)
}
var res=countDown(5)
console.log(res)

// =====================================================================


// factorial no -
function fact(n){
    if(n== 1){
        return 1
    }
    return n*fact(n-1)
}
var res = fact(6)
console.log(res)

// ==============================================================================

// fibonacii --

function fib(n){
    if(n<=2){
        return 1
    }
    return fib(n-1)+fib(n-2)
}
var res = fib(6)
console.log(res)

// ==========================================================================

// product of array ----

function product(arr){
    if(arr.length == 0){
        return 1
    }
    return arr[0] * product(arr.splice(1))
}
var res = product([3,5,2,8])
console.log(res)

// ==============================================================================

// power--
function power(b, exp){
    if(exp == 0){
        return 1
    }
    return b*power(b , exp-1)
}
var res = power(2,5)
console.log(res)

// =============================================================================

// reverse string ---------------

/*slice() method extracts a part of a string . */

    function reverse(str){
        if(str.length <=1){
            return str
        }else{
            return reverse(str.slice(1)) +str[0]
        }
    }
    var res = reverse("nisha")
    console.log(res)
    // ============================================================

    // reverse each word of string -
    function reverse(str){
        if(str.length == 0){
            return str
        }
        return reverse(str.slice(1))+str[0]
    }

function eachWord(sent){
    let words = sent.split(" ")

    for(let i=0; i<words.length; i++){
        words[i] = reverse(words[i])
    }
    return words.join(" ")
}

var res = eachWord("hey everyone")
console.log(res)

// ===================================================

// captalize word--

function capitalise(arr){
    let result = []

    if(arr.length === 0)
    return []

    let s = arr[0] [0].toUpperCase() + arr[0].slice(1)
    
    result.push(s)

    return result.concat(capitalise(arr.slice(1)))
}
var res = capitalise(["nisha" , "hey"])
console.log(res)
// =======================================================

// check if a string is palindrome or not :-
function isPlr(str){
  if(str.length<=1){
    return true
  }else{
    return (str[0]== str.slice(-1) && isPlr(str.slice(1, -1)))
  }
}
var res = isPlr("level")
console.log(res)
// =============================================================













    





