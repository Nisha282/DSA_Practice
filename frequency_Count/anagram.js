
// https://leetcode.com/problems/valid-anagram/

/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

let s="level" , t= "vivle"
function isAnagram(s,t){
    if(s.length !== t.length){
        return false
    }
    let map = {};
    for(let i=0; i<s.length; i++){
        if(!map[s[i]]) map[s[i]] =0;
        if(!map[t[i]]) map[t[i]] =0;
        map[s[i]]++;
        map[t[i]]--;
    }
    for(let key in map){
        if(map[key] !=0) return false
    }
    return true;
}

console.log(isAnagram(s,t))