// this function return the number to a its arabic representation
// for example ١٢٣٤٥ => 12345
// PERSIAN (فارسی), ARABIC (عربي) , URDU (اُردُو)

export const convertToArabicNumbers = s =>
  s
    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, d => `${d.charCodeAt(0) - 1632}`)
    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => `${d.charCodeAt(0) - 1776}`);
