import checkInputValue from '../functions/checkInputValue';

test.each([
  ['4539393668767628', true],
  ['Mastercard', false],
])(('значения должны совпадать'), (value, expected) => {
  const result = checkInputValue(value);
  expect(result).toBe(expected);
});
