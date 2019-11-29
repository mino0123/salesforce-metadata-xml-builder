module.exports = (value) => {
  if (!value) { return ''; }
  if (["TEXT","NUMBER","BOOLEAN","DATE","DATE_TIME","TIME"].indexOf(value) < 0) {
    throw new Error('Invalid RecommendationConditionValueType value: ' + value);
  }
  return value;
};