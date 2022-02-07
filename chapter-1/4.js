const palindromePerm = (string) => {
  str = string.toLowerCase();
  console.log(str);
  const lettObj = {};

  for (let i = 0; i < str.length; i++) {
    let currLetter = str[i];
    // if (currLetter = " ") continue
    if (lettObj[currLetter]) {
      lettObj[currLetter]++;
    } else {
      lettObj[currLetter] = 1;
    }
  }
  for (key in lettObj) {
    if (lettObj[key] % 2 === 0) {
      delete lettObj[key];
    }
  }
  if (Object.keys(lettObj).length > 1) return false;
  else return true;
};
console.log(palindromePerm("Tactcoa"));
console.log(palindromePerm("AAAAAAAAAAAAAAAAAAAAffgf"));
