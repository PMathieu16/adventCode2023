const trebuchet1 = (data) => {
  let count = 0;

  data.forEach((item) => {
    let num = [];
    const characters = `${item}`.split("");

    characters.forEach((char) => {
      if (!isNaN(parseInt(char))) {
        num.push(char);
      }
    });

    count += parseInt(num[0] + num[num.length - 1]);
  });

  return count;
};

export default trebuchet1;
