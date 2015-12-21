module.exports = (value) => {
  if (!value) { return ''; }
  if (["currency","percent","number"].indexOf(value) < 0) {
    throw new Error('Invalid ReportAggregateDatatype value: ' + value);
  }
  return value;
};