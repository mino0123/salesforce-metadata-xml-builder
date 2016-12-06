module.exports = (value) => {
  if (!value) { return ''; }
  if (["TwentyFourHours","TwelveHours","EightHours","FourHours","TwoHours","SixtyMinutes","ThirtyMinutes","FifteenMinutes"].indexOf(value) < 0) {
    throw new Error('Invalid SessionTimeout value: ' + value);
  }
  return value;
};