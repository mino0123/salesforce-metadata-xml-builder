module.exports = (value) => {
  if (!value) { return ''; }
  if (["Short","Medium"].indexOf(value) < 0) {
    throw new Error('Invalid RateLimitTimePeriod value: ' + value);
  }
  return value;
};