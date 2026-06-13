import { defineConfig, devices } from '@playwright/test';


const isCI = !!process.env.CI

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: false,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  //workers: isCI ? 2 : undefined,
  workers:2,
  reporter: [
    ['./src/utils/CustomReporter.ts'],
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
    ['list']
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000,
    headless:false

  },


  /* Configure projects for major browsers */
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] }, },
  /*
             { name: 'firefox', use: { ...devices['Desktop Firefox'] }, },
             { name: 'webkit', use: { ...devices['Desktop Safari'] }, },
                */
             ],
            

});
