module.exports = (value) => {
  if (!value) { return ''; }
  if (["Accepted","Rejected"].indexOf(value) < 0) {
    throw new Error('Invalid StrategyReactionType value: ' + value);
  }
  return value;
};