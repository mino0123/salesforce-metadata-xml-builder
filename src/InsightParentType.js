module.exports = (value) => {
  if (!value) { return ''; }
  if (["Opportunity","Account"].indexOf(value) < 0) {
    throw new Error('Invalid InsightParentType value: ' + value);
  }
  return value;
};