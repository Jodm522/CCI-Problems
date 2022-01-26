const isPermutationV1 = (str1, str2) => {
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
  }
  return true;
};

console.log(
  "1) " + isPermutationV1("AABBCCDDEEFGGHHIIJJJJJ", "AABBCCDDEEFGGHHIIJJJJJ")
); // true
console.log("2) " + isPermutationV1("ABCDEFG", "GFEDCBA")); // true
console.log("3) " + isPermutationV1("A B C D E", "E D C B A")); // true
console.log("4) " + isPermutationV1("AABBCCDDEEFGGHHIIJJJJJ", "ZZZ")); // false
console.log("5) " + isPermutationV1("A B C", "ABC")); // false
console.log("6) " + isPermutationV1("ABC", "A B C")); // false

const isPermutationV2 = (str1, str2) => {
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
    else delete str2Store[key];
  }
  if (Object.keys(str2Store).length) return false;
  return true;
};
console.log("---V2---");
console.log(
  "7) " + isPermutationV2("AABBCCDDEEFGGHHIIJJJJJ", "AABBCCDDEEFGGHHIIJJJJJ")
); // true
console.log("8) " + isPermutationV2("ABCDEFG", "GFEDCBA")); // true
console.log("9) " + isPermutationV2("A B C D E", "E D C B A")); // true
console.log("10) " + isPermutationV2("AABBCCDDEEFGGHHIIJJJJJ", "ZZZ")); // false
console.log("11) " + isPermutationV2("A B C", "ABC")); // false
console.log("12) " + isPermutationV2("ABC", "A B C")); // false
