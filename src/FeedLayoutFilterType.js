module.exports = (value) => {
  if (!value) { return ''; }
  if (["AllUpdates","FeedItemType","Custom"].indexOf(value) < 0) {
    throw new Error('Invalid FeedLayoutFilterType value: ' + value);
  }
  return value;
};