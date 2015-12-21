module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Case","Static"].indexOf(value) < 0) {
    throw new Error('Invalid BusinessHoursSourceType value: ' + value);
  }
  return value;
};