module.exports = (value) => {
  if (!value) { return ''; }
  if (["CORPORATE","PERSONAL"].indexOf(value) < 0) {
    throw new Error('Invalid DisplayCurrency value: ' + value);
  }
  return value;
};