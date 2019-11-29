module.exports = (value) => {
  if (!value) { return ''; }
  if (["AllCriteriaMatch","AnyCriterionMatches","CustomLogicMatches"].indexOf(value) < 0) {
    throw new Error('Invalid FormulaFilterType value: ' + value);
  }
  return value;
};