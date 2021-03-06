module.exports = (value) => {
  if (!value) { return ''; }
  if (["Positive","Negative","Informational","Suggestion"].indexOf(value) < 0) {
    throw new Error('Invalid InsightTrendType value: ' + value);
  }
  return value;
};