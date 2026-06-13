import dotenv from 'dotenv';

dotenv.config();

export const env = {
    username: process.env.APP_USERNAME || 'standard_user',
    password: process.env.APP_PASSWORD || 'tta_secret',
    baseUrl: process.env.BASE_URL || 'https://app.thetestingacademy.com',
    devBaseUrl: process.env.DEV_BASE_URL || 'http://localhost:3000',
    stgBaseUrl: process.env.STG_BASE_URL || 'https://stage.thetestingacademy.com',
    prodBaseUrl: process.env.PROD_BASE_URL || 'https://app.thetestingacademy.com',
    qaBaseUrl: process.env.QA_BASE_URL || 'https://app.thetestingacademy.com',
};
