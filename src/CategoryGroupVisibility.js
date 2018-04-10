module.exports = (value) => {
  if (!value) { return ''; }
  if (["ALL","NONE","CUSTOM"].indexOf(value) < 0) {
    throw new Error('Invalid CategoryGroupVisibility value: ' + value);
  }
  return value;
};