module.exports = (value) => {
  if (!value) { return ''; }
  if (["Pattern","Value"].indexOf(value) < 0) {
    throw new Error('Invalid MlSlotClassExtractionType value: ' + value);
  }
  return value;
};