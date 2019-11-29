module.exports = (value) => {
  if (!value) { return ''; }
  if (["New","Pending","Deployed"].indexOf(value) < 0) {
    throw new Error('Invalid ACPStatus value: ' + value);
  }
  return value;
};