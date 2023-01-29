// Longest Substring Without Repeating Characters


    let s = "abcdefcd"
    let freq={}
    
    let start =0
    let ans=0
    for(let end=0; end<s.length; end++){
        while(freq[s[end]]==1){
            freq[s[start]]=0;
            start++
        }
        freq[s[end]]=1
        
        ans= Math.max(ans , end-start+1)
    }
    // return ans
    console.log(ans)


    // Maximum Number of Vowels in a Substring of Given Length

    // function check(ch){
    //     if(ch == 'a' || ch == 'e' || ch=='o' || ch=='i' || ch=='u'){
    //         return true
    //     }else false
    // }

    // let s = "abciiidef"
    // let k = 3
    // var maxVowels = function(s, k) {
    //     let c = 0;
    //     let maxCount = 0;
        
    //     for(let i=0; i<k; i++){
    //         if(check(s[i])){
    //             c++;
    //         }
    //     }
    //     maxCount=Math.max(maxCount , c)
        
    //     for(let i=k; i<s.length; i++){
    //         if(check(s[i-k])){
    //             c--
    //         }
    //         if(check(s[i])){
    //             c++
    //         }
    //         maxCount= Math.max(maxCount , c)
    //     }
    //     return maxCount
        
    // };
    // console.log()