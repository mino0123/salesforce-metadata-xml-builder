module.exports = (value) => {
  if (!value) { return ''; }
  if (["with","without"].indexOf(value) < 0) {
    throw new Error('Invalid ObjectFilterOperator value: ' + value);
  }
  return value;
};