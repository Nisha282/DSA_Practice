function reverse(str){
    if(str.length===0){
      return ""
    }else{
      return reverse(str.slice(1)) + str[0]
    }
   }
   function revSentWord(sent){
    let words = sent.split(" ")
    for(let i=0; i<words.length; i++){
      words[i] = reverse(words[i])
    }
    return words.join(" ")
   }
  var res = revSentWord("hello all of you")
  console.log(res)