module.exports = (value) => {
  if (!value) { return ''; }
  if (["Application","Component","Event","Interface","Tokens"].indexOf(value) < 0) {
    throw new Error('Invalid AuraBundleType value: ' + value);
  }
  return value;
};