module.exports = (value) => {
  if (!value) { return ''; }
  if (["Hidden","DefaultOff","DefaultOn"].indexOf(value) < 0) {
    throw new Error('Invalid TabVisibility value: ' + value);
  }
  return value;
};