module.exports = (value) => {
  if (!value) { return ''; }
  if (["Protected","Public"].indexOf(value) < 0) {
    throw new Error('Invalid SetupObjectVisibility value: ' + value);
  }
  return value;
};