import * as dotenv from 'dotenv';

const environment = process.env.TTA_ENV || 'qa';

dotenv.config({
    path: `./config/${environment}.env`
});

export const env = {
    baseURL: process.env.APP_URL || 'https://app.thetestingacademy.com/playwright/ttacart/',
    username: process.env.APP_USERNAME || 'standard_user',
    password: process.env.APP_PASSWORD || 'tta_secret', 
} 