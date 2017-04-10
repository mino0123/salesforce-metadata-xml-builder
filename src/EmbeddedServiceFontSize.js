module.exports = (value) => {
  if (!value) { return ''; }
  if (["Small","Medium","Large"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceFontSize value: ' + value);
  }
  return value;
};