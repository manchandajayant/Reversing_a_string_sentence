function reversingAStringSentence(string) {
  let stringToArray = string.split(" ");

  let resultArray = [];

  for (let i = 0; i < stringToArray.length; i++) {
    for (let j = stringToArray[i].length - 1; j >= 0; j--) {
      resultArray.push(stringToArray[i][j]);
    }
    resultArray.push(" ");
  }
  return resultArray.join("");
}

console.log(reversingAStringSentence("Hi How are you Doing Buddy"));