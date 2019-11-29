module.exports = (value) => {
  if (!value) { return ''; }
  if (["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(value) < 0) {
    throw new Error('Invalid DaysOfWeek value: ' + value);
  }
  return value;
};