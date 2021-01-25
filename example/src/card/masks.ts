export const cardNumber = (value: string) => {
  const stringParts = value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
  let maskedValue = '';

  if (stringParts) {
    if (stringParts[1].length < 4) {
      maskedValue = `${stringParts[1]}${'X'.repeat(4 - stringParts[1].length)}`;
    } else {
      maskedValue = `${stringParts[1]}`;
    }

    if (stringParts[2].length < 4) {
      maskedValue = `${maskedValue} ${stringParts[2]}${'X'.repeat(4 - stringParts[2].length)}`;
    } else {
      maskedValue = `${maskedValue} ${stringParts[2]}`;
    }

    if (stringParts[3].length < 4) {
      maskedValue = `${maskedValue} ${stringParts[3]}${'X'.repeat(4 - stringParts[3].length)}`;
    } else {
      maskedValue = `${maskedValue} ${stringParts[3]}`;
    }

    if (stringParts[4].length < 4) {
      maskedValue = `${maskedValue} ${stringParts[4]}${'X'.repeat(4 - stringParts[4].length)}`;
    } else {
      maskedValue = `${maskedValue} ${stringParts[4]}`;
    }
  }

  return maskedValue || value;
};