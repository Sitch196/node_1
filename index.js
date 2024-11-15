const evaluateRPN = require("rpn-levan");

const expressions = [
  "15 9 + 10 - 14 - 7 * 5 14 * 14 - *",
  "8 2 15 * + 8 - 13 * 15 - 6 6 13 + + -",
  "4 9 + 1 - 2 6 13 8 0 6 9 * - - + + - *",
  "6 1 - 14 * 11 + 3 - 2 12 5 - * +",
  "2 11 6 * - 6 * 7 - 7 + 14 + 8 10 * +",
  "13 3 14 * 10 + * 12 4 + + 8 *",
  "10 3 11 - + 7 + 2 - 10 - 10 -",
  "4 9 - 1 14 - - 12 + 2 1 - - 8 -",
  "2 11 0 * * 13 15 - + 0 - 4 * 1 *",
  "4 8 6 10 * * * 0 11 * -",
];

const expectedResults = [0, 350, -948, 92, -290, 5536, -13, 11, -8, 1920];

expressions.forEach((expression, index) => {
  const result = evaluateRPN(expression);
  const expected = expectedResults[index];
  const isCorrect = result === expected;

  console.log(`Expression: "${expression}"`);

  console.log(`Calculated: ${result}, Expected: ${expected}`);

  console.log(
    `Test ${isCorrect ? "\x1b[32mPASSED\x1b[0m" : "\x1b[31mFAILED\x1b[0m"}`
  );

  console.log("---------------------------");
});
