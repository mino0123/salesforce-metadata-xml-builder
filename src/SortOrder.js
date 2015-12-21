module.exports = (value) => {
  if (!value) { return ''; }
  if (["Asc","Desc"].indexOf(value) < 0) {
    throw new Error('Invalid SortOrder value: ' + value);
  }
  return value;
};