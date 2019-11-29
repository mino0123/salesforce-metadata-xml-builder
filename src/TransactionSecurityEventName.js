module.exports = (value) => {
  if (!value) { return ''; }
  if (["ReportEvent","ApiEvent","AdminSetupEvent","LoginEvent","ListViewEvent"].indexOf(value) < 0) {
    throw new Error('Invalid TransactionSecurityEventName value: ' + value);
  }
  return value;
};