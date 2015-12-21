module.exports = (value) => {
  if (!value) { return ''; }
  if (["Default","HideBlankLines"].indexOf(value) < 0) {
    throw new Error('Invalid FeedItemDisplayFormat value: ' + value);
  }
  return value;
};