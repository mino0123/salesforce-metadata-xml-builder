module.exports = (value) => {
  if (!value) { return ''; }
  if (["Narrow","Medium","Wide"].indexOf(value) < 0) {
    throw new Error('Invalid DashboardComponentSize value: ' + value);
  }
  return value;
};