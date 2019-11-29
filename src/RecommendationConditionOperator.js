module.exports = (value) => {
  if (!value) { return ''; }
  if (["EQUALS","GREATER_THAN","GREATER_THAN_OR_EQUAL_TO","LESS_THAN","LESS_THAN_OR_EQUAL_TO","NOT_EQUALS","LIKE","STARTS_WITH","ENDS_WITH","CONTAINS"].indexOf(value) < 0) {
    throw new Error('Invalid RecommendationConditionOperator value: ' + value);
  }
  return value;
};