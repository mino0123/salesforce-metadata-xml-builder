module.exports = (value) => {
  if (!value) { return ''; }
  if (["Month","Quarter","Week","Year"].indexOf(value) < 0) {
    throw new Error('Invalid PeriodTypes value: ' + value);
  }
  return value;
};