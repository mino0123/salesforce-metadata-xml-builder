module.exports = (value) => {
  if (!value) { return ''; }
  if (["ThirtyDays","SixtyDays","NinetyDays","SixMonths","OneYear","Never"].indexOf(value) < 0) {
    throw new Error('Invalid Expiration value: ' + value);
  }
  return value;
};