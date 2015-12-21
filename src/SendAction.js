module.exports = (value) => {
  if (!value) { return ''; }
  if (["Send"].indexOf(value) < 0) {
    throw new Error('Invalid SendAction value: ' + value);
  }
  return value;
};