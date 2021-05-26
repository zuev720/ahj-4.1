import checkPaySystem from '../functions/checkPaySystem';

test.each([
  ['Visa', 4539393668767628, true],
  ['Mastercard', 4539393668767628, false],
  ['Mastercard', 5232008259188953, true],
  ['American-express', 373484498529010, true],
  ['American-express', 4539393668767628, false],
  ['Discover', 6011683143747696, true],
  ['Discover', 4539393668767628, false],
  ['Mir', 2201382000000013, true],
  ['Mir', 'string', false],
  ['Mir', 220, false],
  ['Mir', 22013820000000134444444444444444444444444, false],
])(('значения должны совпадать'), (card, number, expected) => {
  const result = checkPaySystem(card, number);
  expect(result).toBe(expected);
});
