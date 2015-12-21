module.exports = (value) => {
  if (!value) { return ''; }
  if (["js","css"].indexOf(value) < 0) {
    throw new Error('Invalid VisualizationResourceType value: ' + value);
  }
  return value;
};