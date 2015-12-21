module.exports = (value) => {
  if (!value) { return ''; }
  if (["narrow","wide"].indexOf(value) < 0) {
    throw new Error('Invalid PageComponentWidth value: ' + value);
  }
  return value;
};