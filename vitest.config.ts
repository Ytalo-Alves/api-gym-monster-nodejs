import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    // Use VITEST_MODE to distinguish e2e vs unit because Vitest itself sets NODE_ENV='test'
    setupFiles: process.env.VITEST_MODE === "e2e" ? ["./tests/setup-e2e.ts"] : [],
    include: process.env.VITEST_MODE === "e2e"
      ? ["tests/e2e/**/*.spec.ts"]
      : ["tests/unit/**/*.spec.ts"],
  },
});
