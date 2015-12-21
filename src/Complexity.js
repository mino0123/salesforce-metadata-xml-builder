module.exports = (value) => {
  if (!value) { return ''; }
  if (["NoRestriction","AlphaNumeric","SpecialCharacters","UpperLowerCaseNumeric","UpperLowerCaseNumericSpecialCharacters"].indexOf(value) < 0) {
    throw new Error('Invalid Complexity value: ' + value);
  }
  return value;
};