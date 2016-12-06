module.exports = (value) => {
  if (!value) { return ''; }
  if (["Original","ZippedVersions"].indexOf(value) < 0) {
    throw new Error('Invalid ContentAssetFormat value: ' + value);
  }
  return value;
};