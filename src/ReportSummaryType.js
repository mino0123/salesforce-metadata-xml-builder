module.exports = (value) => {
  if (!value) { return ''; }
  if (["Sum","Average","Maximum","Minimum","None"].indexOf(value) < 0) {
    throw new Error('Invalid ReportSummaryType value: ' + value);
  }
  return value;
};