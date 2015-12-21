module.exports = (value) => {
  if (!value) { return ''; }
  if (["Edit","Required","Readonly"].indexOf(value) < 0) {
    throw new Error('Invalid UiBehavior value: ' + value);
  }
  return value;
};