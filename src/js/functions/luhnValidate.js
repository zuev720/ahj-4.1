export default function luhnValidate(cardNumber) {
  let sum = null;
  for (let i = 0; i < cardNumber.length; i += 1) {
    let result = parseInt(cardNumber[i], 10);

    if ((cardNumber.length - i) % 2 === 0) {
      result *= 2;
      if (result > 9) {
        result -= 9;
      }
    }
    sum += result;
  }
  return sum % 10 === 0;
}
