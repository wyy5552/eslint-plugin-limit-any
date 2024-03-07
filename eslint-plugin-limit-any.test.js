// count.test.js
const RuleTester = require("eslint").RuleTester;
const rule = require("./count");

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

ruleTester.run("limit-any", rule, {
  valid: [
    {
      code: "let a: any = 1;",
      options: [2], // 这里我们传递一个参数，表示允许的"any"类型的最大数量
      parserOptions: { ecmaVersion: 2020 },
    },
  ],

  invalid: [
    {
      code: "let a: any = 1; let b: any = 2; let c: any = 3; let d: any = 4;",
      options: [3], // 这里我们传递一个参数，表示允许的"any"类型的最大数量
      parserOptions: { ecmaVersion: 2020 },
      errors: [
        { message: /The "any" type has been used more than \d+ times./ },
      ],
    },
  ],
});
