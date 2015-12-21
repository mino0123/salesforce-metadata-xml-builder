module.exports = (value) => {
  if (!value) { return ''; }
  if (["AllUsers","InternalUsers"].indexOf(value) < 0) {
    throw new Error('Invalid FeedItemVisibility value: ' + value);
  }
  return value;
};