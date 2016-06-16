module.exports = (value) => {
  if (!value) { return ''; }
  if (["Small","Medium","Large"].indexOf(value) < 0) {
    throw new Error('Invalid FormFactor value: ' + value);
  }
  return value;
};