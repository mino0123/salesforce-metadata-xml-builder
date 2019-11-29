module.exports = (value) => {
  if (!value) { return ''; }
  if (["Disabled","Enabled","Incomplete","PendingAvailability","PendingApproval","Refresh"].indexOf(value) < 0) {
    throw new Error('Invalid PrivateConnectionStatus value: ' + value);
  }
  return value;
};