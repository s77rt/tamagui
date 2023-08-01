import { expect, test } from '@playwright/test'

import { getStyles } from './utils'
import { setupPage } from './test-utils'

test.beforeEach(async ({ page }) => {
  await setupPage(page, { name: "VariantsOrder", type: "useCase" })
})

test(`variants apply below default props but above parent defaultvariants/props as you nest styled()`, async ({
  page,
}) => {
  expect(await getStyles(page.getByTestId('button').first())).toMatchObject({
    flexDirection: 'row',
  })

  expect(await getStyles(page.getByTestId('text1').first())).toMatchObject({
    fontSize: '16px',
  })

  expect(await getStyles(page.getByTestId('text2').first())).toMatchObject({
    fontSize: '20px',
  })

  expect(await getStyles(page.getByTestId('text3').first())).toMatchObject({
    fontSize: '30px',
  })
})
