import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const environment = process.env.TEST_ENV  || 'qa';

const envFilePath = path.resolve(__dirname, `${environment}.env`);

if (!fs.existsSync(envFilePath)) {
    throw new Error(`Environment file not found: ${envFilePath}`);
}

dotenv.config({ path: envFilePath });
console.log(`[env] Selected environment: ${environment}`);

export const env = {
    baseURL: process.env.APP_URL || 'https://app.thetestingacademy.com/playwright/ttacart/',
    username: process.env.APP_USERNAME || 'standard_user',
    password: process.env.APP_PASSWORD || 'tta_secret',
};