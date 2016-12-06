module.exports = (value) => {
  if (!value) { return ''; }
  if (["Standard","Console"].indexOf(value) < 0) {
    throw new Error('Invalid NavType value: ' + value);
  }
  return value;
};