import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

function resolveBaseURL(): string {
  if (process.env.BASE_URL) {
    return process.env.BASE_URL
  }
  else {
    const env = (process.env.TTA_ENV || 'qa').toLowerCase();

    switch (env) {
      case 'dev':
      case 'local':
        return process.env.DEV_BASE_URL || 'http://localhost:3000';

      case 'stg':
      case 'stage':
      case 'staging':
        return process.env.STG_BASE_URL || 'https://stage.thetestingacademy.com';

      case 'prod':
      case 'production':
        return process.env.PROD_BASE_URL || 'https://app.thetestingacademy.com';

      case 'qa':6
      default:
        return process.env.QA_BASE_URL || 'https://app.thetestingacademy.com';
    }


  }
}

const isCI = !!process.env.CI

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: false,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : undefined,
  reporter: [
    ['./src/utils/CustomReporter.ts'],
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
    ['list']
  ],
  use: {
    baseURL: resolveBaseURL(),
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
