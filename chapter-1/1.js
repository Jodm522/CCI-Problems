const isUniqueV1 = (str) => {
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    if (currentLetter === " ") i++;

    for (let j = i + 1; j < str.length; j++) {
      const letterToCheck = str[j];
      if (currentLetter === " ") continue;

      if (currentLetter === letterToCheck) {
        return false;
      }
    }
  }
  return true;
};

console.log("1) " + isUniqueV1("ABCDE FGHI JKL MNOP")); //True
console.log("2) " + isUniqueV1("AB CDEF GH IJK LMNOP")); //True
console.log("3) " + isUniqueV1("ABCDEFGHIJKLMNOB")); //false
console.log("4) " + isUniqueV1("ABCD1 EFGH IJK LMN OP 1")); //false

const isUniqueV2 = (str) => {
  const letterStore = {};

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (currentLetter === " ") continue;
    else if (letterStore[currentLetter]) return false;
    else letterStore[currentLetter] = 1;
  }
  return true;
};
console.log("---V2---");
console.log("5) " + isUniqueV2("ABCDE FGHI JKL MNOP")); //True
console.log("6) " + isUniqueV2("AB CDEF GH IJK LMNOP")); //True
console.log("7) " + isUniqueV2("ABCDEFGHIJKLMNOB")); //false
console.log("8) " + isUniqueV2("ABCD1 EFGH IJK LMN OP 1")); //false
