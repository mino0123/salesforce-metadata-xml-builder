module.exports = (value) => {
  if (!value) { return ''; }
  if (["Allow","Block"].indexOf(value) < 0) {
    throw new Error('Invalid DupeActionType value: ' + value);
  }
  return value;
};