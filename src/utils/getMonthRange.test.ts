import getMonthRange from './getMonthRange'

it('2018-01-01', () => {
  const result = getMonthRange('2018-01-01')

  expect(result.start).toBe(1)
  expect(result.end).toBe(31)
})

it('2018-12-01', () => {
  const result = getMonthRange('2018-12-01')

  expect(result.start).toBe(1)
  expect(result.end).toBe(31)
})

it('2019-02-01', () => {
  const result = getMonthRange('2019-02-01')

  expect(result.start).toBe(1)
  expect(result.end).toBe(28)
})

it('2020-02-01', () => {
  const result = getMonthRange('2020-02-01')

  expect(result.start).toBe(1)
  expect(result.end).toBe(29)
})
