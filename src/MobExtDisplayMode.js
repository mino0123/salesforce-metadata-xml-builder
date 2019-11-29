module.exports = (value) => {
  if (!value) { return ''; }
  if (["FullScreen"].indexOf(value) < 0) {
    throw new Error('Invalid MobExtDisplayMode value: ' + value);
  }
  return value;
};