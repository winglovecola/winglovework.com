import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  extends: [
    ...compat.extends("next/core-web-vitals", "next/typescript"), // Extend from Next.js and TypeScript
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "error", // Custom rule to disallow the usage of `any`
  },
};

export default eslintConfig;
