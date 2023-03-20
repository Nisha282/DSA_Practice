//  How do you calculate the number of vowels and consonants in a String

function VowelConsonent(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if ((str[i] = "")) {
      continue;
    } else if (vowel.includes(str[i])) {
      vowelCount++;
    } else {
      consonantsCount++;
    }
  }
  return [vowelCount, consonantsCount];
}

console.log(VowelConsonent("hello world"));
