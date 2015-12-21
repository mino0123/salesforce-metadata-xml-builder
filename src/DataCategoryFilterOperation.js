module.exports = (value) => {
  if (!value) { return ''; }
  if (["above","below","at","aboveOrBelow"].indexOf(value) < 0) {
    throw new Error('Invalid DataCategoryFilterOperation value: ' + value);
  }
  return value;
};