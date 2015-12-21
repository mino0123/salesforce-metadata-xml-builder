module.exports = (value) => {
  if (!value) { return ''; }
  if (["MultiBlock","Matrix","Summary","Tabular"].indexOf(value) < 0) {
    throw new Error('Invalid ReportFormat value: ' + value);
  }
  return value;
};