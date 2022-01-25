const isPermutation = (str1, str2) => {
  //   if (str1.length !== str2.length) return false;
  let str1Store = {};
  const str2Store = {};

  for (let i = 0; i < str1.length; i++) {
    let currentLetter = str1[i];
    if (currentLetter === " ") currentLetter = "SPACE";

    if (str1Store[currentLetter]) str1Store[currentLetter] += 1;
    else str1Store[currentLetter] = 1;
  }
  for (let j = 0; j < str2.length; j++) {
    let currentLetter = str2[j];
    if (currentLetter === " ") currentLetter = "SPACE";
    if (str2Store[currentLetter]) str2Store[currentLetter] += 1;
    else str2Store[currentLetter] = 1;
  }

  for (key in str1Store) {
    if (!str2Store[key]) return false;
    else if (str1Store[key] !== str2Store[key]) return false;
  }
  for (key in str2Store) {
   
    if (str1Store[key] === undefined) return false;
    else if (str2Store[key] !== str1Store[key]) return false;

  }return true;
};

console.log(
  "1) " + isPermutation("AABBCCDDEEFGGHHIIJJJJJ", "AABBCCDDEEFGGHHIIJJJJJ")
); // true
console.log("2) " + isPermutation("ABCDEFG", "GFEDCBA")); // true
console.log("3) " + isPermutation("A B C D E", "E D C B A")); // true
console.log("4) " + isPermutation("AABBCCDDEEFGGHHIIJJJJJ", "ZZZ")); // false
console.log("5) " + isPermutation("A B C", "ABC")); // false
console.log("6) " + isPermutation("ABC", "A B C")); // false
