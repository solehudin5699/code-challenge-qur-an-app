import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

//SOURCE: https://vitest.dev/config/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['src/**/*.test.{ts,tsx}'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/cypress/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        'src/assets/**',
        'src/configs/**',
        'src/context/**',
        'src/services/**',
        'src/test-utils/**',
      ],
      globals: true,
      environment: 'jsdom',
      silent: true,
      coverage: {
        enabled: true,
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'coverage/**',
          'dist/**',
          'packages/*/test{,s}/**',
          '**/*.d.ts',
          'cypress/**',
          'test{,s}/**',
          'test{,-*}.{js,cjs,mjs,ts,tsx,jsx}',
          '**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}',
          '**/*{.,-}spec.{js,cjs,mjs,ts,tsx,jsx}',
          '**/__tests__/**',
          '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
          '**/.{eslint,mocha,prettier}rc.{js,cjs,yml}',
          'src/assets/**',
          'src/configs/**',
          'src/context/**',
          'src/services/**',
          'src/test-utils/**',
        ],
      },
      setupFiles: './vitest.setup.ts',
    },
  })
);
