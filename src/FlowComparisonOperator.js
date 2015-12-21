module.exports = (value) => {
  if (!value) { return ''; }
  if (["EqualTo","NotEqualTo","GreaterThan","LessThan","GreaterThanOrEqualTo","LessThanOrEqualTo","StartsWith","EndsWith","Contains","IsNull","WasSet","WasSelected","WasVisited"].indexOf(value) < 0) {
    throw new Error('Invalid FlowComparisonOperator value: ' + value);
  }
  return value;
};