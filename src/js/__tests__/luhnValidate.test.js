import luhnValidate from '../functions/luhnValidate';

test.each([
  ['6011683143747696', true],
  ['6011683143747690', false],
  ['4539393668767628', true],
  ['4539393668767620', false],
])(('значения должны совпадать'), (number, expected) => {
  const result = luhnValidate(number);
  expect(result).toBe(expected);
});
