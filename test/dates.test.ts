import { expect, test } from 'vitest'

import { dateToString } from '../src/utils/dates'

test('Beginning of time test', () => {
  expect(dateToString(new Date(0)), '01 / 01 / 1970')
})
