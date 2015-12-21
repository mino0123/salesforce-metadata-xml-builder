module.exports = (value) => {
  if (!value) { return ''; }
  if (["link","button","massActionButton"].indexOf(value) < 0) {
    throw new Error('Invalid WebLinkDisplayType value: ' + value);
  }
  return value;
};