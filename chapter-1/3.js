const URLify = (str, len) => {
  str = str.slice(0, len);
  str2 = str.replace(/ /g, "%20");

  console.log(str2);
};

URLify("Mr John Smith          ", 13);
