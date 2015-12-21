module.exports = (value) => {
  if (!value) { return ''; }
  if (["tabular","summary","snapshot"].indexOf(value) < 0) {
    throw new Error('Invalid ReportJobSourceTypes value: ' + value);
  }
  return value;
};