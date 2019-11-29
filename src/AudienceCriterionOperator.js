module.exports = (value) => {
  if (!value) { return ''; }
  if (["Equal","NotEqual","GreaterThan","GreaterThanOrEqual","LessThan","LessThanOrEqual","Contains","StartsWith","Includes","NotIncludes"].indexOf(value) < 0) {
    throw new Error('Invalid AudienceCriterionOperator value: ' + value);
  }
  return value;
};