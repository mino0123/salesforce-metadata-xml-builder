module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Top","Middle","Bottom"].indexOf(value) < 0) {
    throw new Error('Invalid LetterheadVerticalAlignment value: ' + value);
  }
  return value;
};