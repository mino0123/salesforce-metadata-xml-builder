module.exports = (value) => {
  if (!value) { return ''; }
  if (["url","sControl","javascript","page","flow"].indexOf(value) < 0) {
    throw new Error('Invalid WebLinkType value: ' + value);
  }
  return value;
};