module.exports = (value) => {
  if (!value) { return ''; }
  if (["Pig"].indexOf(value) < 0) {
    throw new Error('Invalid DataPipelineType value: ' + value);
  }
  return value;
};