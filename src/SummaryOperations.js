module.exports = (value) => {
  if (!value) { return ''; }
  if (["count","sum","min","max"].indexOf(value) < 0) {
    throw new Error('Invalid SummaryOperations value: ' + value);
  }
  return value;
};