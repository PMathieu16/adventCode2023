const replaceStringByNumber = (str) => {
  return str
    .replaceAll("one", "o1ne")
    .replaceAll("two", "t2wo")
    .replaceAll("three", "t3hree")
    .replaceAll("four", "f4our")
    .replaceAll("five", "f5ive")
    .replaceAll("six", "s6ix")
    .replaceAll("seven", "s7even")
    .replaceAll("eight", "e8ight")
    .replaceAll("nine", "n9ine");
};

const trebuchet2 = (data) => {
  let count = 0;

  data.forEach((item) => {
    let num = [];
    const replacedString = replaceStringByNumber(`${item}`);
    const characters = replacedString.split("");

    characters.forEach((char) => {
      if (!isNaN(parseInt(char))) {
        num.push(char);
      }
    });

    count += parseInt(num[0] + num[num.length - 1]);
  });

  return count;
};

export default trebuchet2;
