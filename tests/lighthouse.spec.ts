import { test } from '@playwright/test';
import { execSync } from 'child_process';

let url: string;

url = "https://example.cypress.io/";
test(`Lighthouse performance test for ${url}`, async () => {
  execSync(`npx lhci autorun --config=.lighthouserc.json --collect.url=${url}`, { stdio: 'inherit' });
});

url = "https://example.cypress.io/commands/querying";
test(`Lighthouse performance test for ${url}`, async () => {
  execSync(`npx lhci autorun --config=.lighthouserc.json --collect.url=${url}`, { stdio: 'inherit' });
});

url = "https://example.cypress.io/utilities";
test(`Lighthouse performance test for ${url}`, async () => {
  execSync(`npx lhci autorun --config=.lighthouserc.json --collect.url=${url}`, { stdio: 'inherit' });
});
