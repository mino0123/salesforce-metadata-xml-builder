module.exports = (value) => {
  if (!value) { return ''; }
  if (["Lightning"].indexOf(value) < 0) {
    throw new Error('Invalid ChatterExtensionType value: ' + value);
  }
  return value;
};