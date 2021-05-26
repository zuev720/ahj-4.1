export default function checkPaySystem(card, inputValue) {
  let regex;

  if (card === 'Visa') regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if (card === 'Mastercard') regex = /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
  if (card === 'American-express') regex = /^(?:3[47][0-9]{13})$/;
  if (card === 'Discover') regex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  if (card === 'Mir') regex = /^(?:2[0-9]{12}(?:[0-9]{3})?)$/;
  return regex.test(inputValue);
}
