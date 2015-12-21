module.exports = (value) => {
  if (!value) { return ''; }
  if (["UnderConstruction","Live","DownForMaintenance"].indexOf(value) < 0) {
    throw new Error('Invalid NetworkStatus value: ' + value);
  }
  return value;
};