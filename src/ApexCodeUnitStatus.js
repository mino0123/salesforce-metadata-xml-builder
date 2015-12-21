module.exports = (value) => {
  if (!value) { return ''; }
  if (["Inactive","Active","Deleted"].indexOf(value) < 0) {
    throw new Error('Invalid ApexCodeUnitStatus value: ' + value);
  }
  return value;
};