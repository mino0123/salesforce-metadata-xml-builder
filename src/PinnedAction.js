module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Top","Bottom"].indexOf(value) < 0) {
    throw new Error('Invalid PinnedAction value: ' + value);
  }
  return value;
};