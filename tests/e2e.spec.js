import { test, expect } from '@playwright/test';
import { getByRole } from '@testing-library/react';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Projects' }).click();
  await page.getByRole('button', { name: 'Projects' }).click();
  await page.getByRole('heading', { name: 'Projects' }).click();
  await page.locator('button').filter({ hasText: 'Add a project' }).click();
  await page.getByRole('heading', { name: 'Project Creation' }).click();
  await page.getByPlaceholder('project name').click();
  await page.getByPlaceholder('project name').fill('yusuf');
  await page.getByPlaceholder('project name').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Projects' }).click();
  await page.getByRole('button', { name: 'Tasks' }).click();
  await page.getByRole('heading', { name: 'Tasks' }).click();
  await page.getByRole('button', { name: 'Add a Task' }).click();
  await page.getByRole('combobox').selectOption('38d618fb-142a-470e-aca0-3ad122cd8176');
  await page.getByPlaceholder('Taskname').click();
  await page.getByPlaceholder('Taskname').fill('yusuf');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('link', { name: 'Overview' }).click();
  await page.getByRole('link', { name: 'Overview' }).click();
  await page.locator('div:nth-child(11) > .chakra-button').click();
  await page.getByRole('link', { name: 'Timer' }).click();
  await page.getByRole('button', {name: 'Time sadsadas'}).click();
/*   await page.getByRole('button', { name: 'Time sadsadas' }).click(); */
  await page.getByText('sadsadas', { exact: true }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('heading', { name: 'Hour/minutes/seconds/miliseconds' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: 'stop' }).click();
  await page.getByText('sadsadas', { exact: true }).click();
  await page.getByRole('link', { name: 'Calendar' }).click();
  await page.getByRole('heading', { name: 'Calendar' }).click();
  await page.locator('#root div').nth(1).click();
  await page.locator('html').click();
  await page.locator('html').click();
  await page.getByRole('textbox').press('Meta+r');
  await page.getByRole('link', { name: 'Timer' }).click();
  await page.getByText('OverviewTimerCalendar').click();
  await page.getByRole('link', { name: 'Calendar' }).click();
/*   await page.getByRole('textbox').click(); */
 /*  await page.getByRole('textbox').fill('2023-03-20T19:41'); */
/*   await page.getByRole('textbox').fill('202303-20-19:49');
  await page.getByRole('heading', { name: 'Calendar' }).click();
  await page.getByRole('heading', { name: 'hejasa' }).click();
  await page.locator('div').filter({ hasText: 'hejasaOpen Modal' }).getByRole('button', { name: 'Open Modal' }).click(); */

  /* await page.getByRole('input').fill('2023-03-20T19:33');
  await page.getByRole('heading', { name: 'hejasa' }).click();
  await page.getByRole('heading', { name: 'hejasa' }).click();
  await page.locator('div').filter({ hasText: 'hejasaOpen Modal' }).getByRole('button', { name: 'Open Modal' }).click();
  await page.locator('[id="chakra-modal-\\:r13\\:"]').getByText('Close').click(); */
  
});