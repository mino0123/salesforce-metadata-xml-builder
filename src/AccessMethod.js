module.exports = (value) => {
  if (!value) { return ''; }
  if (["Get","Post"].indexOf(value) < 0) {
    throw new Error('Invalid AccessMethod value: ' + value);
  }
  return value;
};