import { expect, test } from 'vitest'

import { slugify } from '../src/utils/slugs'

test("slugify('Well-being') === 'well-being'", () => {
  expect(slugify('Well-being'), 'well-being')
})

test("slugify('New post') === 'new-post'", () => {
  expect(slugify('New post'), 'new-post')
})

test("slugify('Living in Iași') === 'living-in-iasi'", () => {
  expect(slugify('Living in Iași'), 'living-in-iasi')
})

test("slugify('Learning about `window.localStorage`') === 'learning-about-window-localstorage'", () => {
  expect(
    slugify('Learning about `window.localStorage`'),
    'learning-about-window-localstorage',
  )
})

test("slugify('Closes #10.') === 'closes-10'", () => {
  expect(slugify('Closes #10.'), 'closes-10')
})

test("slugify('---random--dash-test----(testing)--') === 'random-dash-test-testing'", () => {
  expect(
    slugify('---random--dash-test----(testing)--'),
    'random-dash-test-testing',
  )
})
