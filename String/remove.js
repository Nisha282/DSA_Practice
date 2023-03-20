//  How do you remove all occurrences of a given character from the input string?

// let str = "abacadaefghaiagak"
// str = str.replaceAll("a" , "");
// console.log(str)


function removeChar(nStr, renoveStr) {
    let output = "";
    for (let i = 0; i < nStr.length; i++) {
      if (nStr[i] !== renoveStr) {
        output += nStr[i];
      }
    }
    return output;
  }
  
  let nStr = "Hello World!";
  let renoveStr = "o";
  let output = removeChar(nStr, renoveStr);
  
  console.log(output); // Output: "Hell Wrld!"
  
