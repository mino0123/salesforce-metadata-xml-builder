module.exports = (value) => {
  if (!value) { return ''; }
  if ([].indexOf(value) < 0) {
    throw new Error('Invalid DashboardComponentColumnType value: ' + value);
  }
  return value;
};