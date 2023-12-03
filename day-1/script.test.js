import trebuchet1 from "./part-one";
import trebuchet2 from "./part-two";

test("trebuchet1", () => {
  const data = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet", 24];
  expect(trebuchet1(data)).toBe(166);
});

test("trebuchet2", () => {
  const data = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
    "fiveight1twoone",
  ];
  expect(trebuchet2(data)).toBe(332);
});
