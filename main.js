const phrase = "turpentine and turtles";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < phrase.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if(phrase[i].toLowerCase() === vowels[j].toLowerCase()) {
      if(phrase[i].toLowerCase() === 'e' || phrase[i].toLowerCase() === 'u') {
        // Doubling the 'e' and 'u'
        resultArray.push(phrase[i].toUpperCase());
      }
      resultArray.push(phrase[i].toUpperCase());
    } 
  }
}
const resultString = resultArray.join('');
console.log(resultString);
// Test
if(resultString === 'UUEEIEEAUUEE') {
  console.log("Whalespeak works correctly");
}
