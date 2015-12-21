module.exports = (value) => {
  if (!value) { return ''; }
  if (["Append","Prepend","Replace"].indexOf(value) < 0) {
    throw new Error('Invalid FlexiPageRegionMode value: ' + value);
  }
  return value;
};