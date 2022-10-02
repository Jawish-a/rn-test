// this function return the number to a formatted number to match the currency format
// for example 12345 => 12,345.00

export const formatNumbers = n =>
  Math.abs(+n)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
