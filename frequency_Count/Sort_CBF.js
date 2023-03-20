/* https://leetcode.com/problems/sort-characters-by-frequency/

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
*/

let s = "cccaaaa"
function frequencySort(s) {
    let mp = new Map();
    for (let val of s) {
        if (!mp.has(val)) {
            mp.set(val, 1)
        } else {
            mp.set(val, mp.get(val) + 1)
        }
    }
    // console.log(mp)

    //convert map into array
    let arr = [...mp]
    arr.sort((a,b)=>b[1]-a[1])
    // console.log(arr)
    let str = arr.map(([c,f])=> c.repeat(f)).join('')
    return str
    
};

console.log(frequencySort(s))