module.exports = (value) => {
  if (!value) { return ''; }
  if (["EqualTo","NotEqualTo","GreaterThan","LessThan","GreaterThanOrEqualTo","LessThanOrEqualTo","StartsWith","EndsWith","Contains","IsNull"].indexOf(value) < 0) {
    throw new Error('Invalid FlowRecordFilterOperator value: ' + value);
  }
  return value;
};