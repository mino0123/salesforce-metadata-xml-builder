module.exports = (value) => {
  if (!value) { return ''; }
  if (["API","APIAsync","Download","UI"].indexOf(value) < 0) {
    throw new Error('Invalid ActionLinkType value: ' + value);
  }
  return value;
};