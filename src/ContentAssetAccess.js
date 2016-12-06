module.exports = (value) => {
  if (!value) { return ''; }
  if (["VIEWER","COLLABORATOR","INFERRED"].indexOf(value) < 0) {
    throw new Error('Invalid ContentAssetAccess value: ' + value);
  }
  return value;
};