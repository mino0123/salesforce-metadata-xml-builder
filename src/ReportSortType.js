module.exports = (value) => {
  if (!value) { return ''; }
  if (["Column","Aggregate","CustomSummaryFormula"].indexOf(value) < 0) {
    throw new Error('Invalid ReportSortType value: ' + value);
  }
  return value;
};