module.exports = (value) => {
  if (!value) { return ''; }
  if (["c"].indexOf(value) < 0) {
    throw new Error('Invalid CommunityBaseTemplate value: ' + value);
  }
  return value;
};