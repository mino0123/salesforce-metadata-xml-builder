module.exports = (value) => {
  if (!value) { return ''; }
  if (["Application","Component","Event","Interface"].indexOf(value) < 0) {
    throw new Error('Invalid AuraBundleType value: ' + value);
  }
  return value;
};