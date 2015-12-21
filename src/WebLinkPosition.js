module.exports = (value) => {
  if (!value) { return ''; }
  if (["fullScreen","none","topLeft"].indexOf(value) < 0) {
    throw new Error('Invalid WebLinkPosition value: ' + value);
  }
  return value;
};