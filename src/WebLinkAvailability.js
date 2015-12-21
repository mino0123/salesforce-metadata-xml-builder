module.exports = (value) => {
  if (!value) { return ''; }
  if (["online","offline"].indexOf(value) < 0) {
    throw new Error('Invalid WebLinkAvailability value: ' + value);
  }
  return value;
};