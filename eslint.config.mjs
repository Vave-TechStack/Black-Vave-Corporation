import next from "eslint-config-next";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      ".kilo/**",
    ],
  },
  ...next,
];

export default eslintConfig;
