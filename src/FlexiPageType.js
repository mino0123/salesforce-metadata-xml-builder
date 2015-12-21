module.exports = (value) => {
  if (!value) { return ''; }
  if (["AppPage","ObjectPage","RecordPage"].indexOf(value) < 0) {
    throw new Error('Invalid FlexiPageType value: ' + value);
  }
  return value;
};