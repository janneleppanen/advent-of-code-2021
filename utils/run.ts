import fs from "fs";

type Callback = (input: string, resolve: Function) => void;

let answer = 0;
let day = 0;

const resolve = (result: unknown) => {
  answer++;
  console.log(`Day ${day} | Answer ${answer}: ${result}`);
};

const run = (dirname: string, callback: Callback) => {
  fs.readFile(`${dirname}/input.txt`, "utf-8", (_, input) => {
    answer = 0;
    day = parseInt(dirname.split("/day-")[1]);

    callback(input, resolve);
  });
};

export default run;
