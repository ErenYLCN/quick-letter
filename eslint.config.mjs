import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const baseConfig = [...compat.extends("next/core-web-vitals", "next/typescript")];

const eslintConfig = [
  {
    ignores: [".next/**/*"],
  },
  ...baseConfig,
  {
    rules: {
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "always",
          children: "always",
        },
      ],
    },
  },
];

export default eslintConfig;
