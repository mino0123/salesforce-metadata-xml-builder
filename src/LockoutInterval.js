module.exports = (value) => {
  if (!value) { return ''; }
  if (["FifteenMinutes","ThirtyMinutes","SixtyMinutes","Forever"].indexOf(value) < 0) {
    throw new Error('Invalid LockoutInterval value: ' + value);
  }
  return value;
};