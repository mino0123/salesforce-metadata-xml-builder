module.exports = (value) => {
  if (!value) { return ''; }
  if (["Region","Facet"].indexOf(value) < 0) {
    throw new Error('Invalid FlexiPageRegionType value: ' + value);
  }
  return value;
};