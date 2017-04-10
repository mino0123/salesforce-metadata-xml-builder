module.exports = (value) => {
  if (!value) { return ''; }
  if (["ReportEvent","ApiEvent"].indexOf(value) < 0) {
    throw new Error('Invalid TransactionSecurityEventName value: ' + value);
  }
  return value;
};