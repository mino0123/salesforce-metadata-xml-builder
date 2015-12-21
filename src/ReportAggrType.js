module.exports = (value) => {
  if (!value) { return ''; }
  if (["Sum","Average","Maximum","Minimum","RowCount"].indexOf(value) < 0) {
    throw new Error('Invalid ReportAggrType value: ' + value);
  }
  return value;
};