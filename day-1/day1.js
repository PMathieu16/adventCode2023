import fs from "fs";
import trebuchet1 from "./part-one.js";
import trebuchet2 from "./part-two.js";

const data = fs.readFileSync("input.txt", "utf8").split("\n");

console.log("Part 1:", trebuchet1(data));
console.log("Part 2:", trebuchet2(data));
