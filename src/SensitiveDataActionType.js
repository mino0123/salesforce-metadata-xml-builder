module.exports = (value) => {
  if (!value) { return ''; }
  if (["Remove","Replace"].indexOf(value) < 0) {
    throw new Error('Invalid SensitiveDataActionType value: ' + value);
  }
  return value;
};