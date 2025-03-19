import { test } from '@playwright/test';
import { execSync } from 'child_process';

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('.lighthouserc.json', 'utf-8'));
const urls = config.ci.collect.url; // Extract URLs from the config

urls.forEach((url) => {
  test(`Lighthouse performance test for ${url}`, async () => {
    console.log(`Running Lighthouse for ${url}...`);

    // Run Lighthouse with the config file (assertions are handled by lhci)
    execSync('npx lhci autorun --config=.lighthouserc.json', { stdio: 'inherit' });

    console.log(`${url} Lighthouse test completed!`);
  });
});