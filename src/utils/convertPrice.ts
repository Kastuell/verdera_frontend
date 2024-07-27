export const convertPrice = (price: number) => {
  const arrayOfDigits: any = Array.from(String(price), Number);
  if (arrayOfDigits.length == 6) arrayOfDigits.splice(3, 0, " ");
  else if (arrayOfDigits.length == 5) arrayOfDigits.splice(2, 0, " ");
  else if (arrayOfDigits.length == 4) arrayOfDigits.splice(1, 0, " ");
  return arrayOfDigits;
};
